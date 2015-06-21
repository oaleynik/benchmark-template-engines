var Benchmark = require('benchmark');

var Mustache = require('mustache');
var Hogan = require('Hogan');
var Dot = require('dot');
var Handlebars = require('handlebars');
var Dust = require('dustjs-linkedin');

var Lodash = require('lodash');
Lodash.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

var Underscore = require('underscore');
Underscore.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

///////////// Define template strings and context

var templateStrings = {
  Mustache: 'Hello, {{name}}!',
  Handlebars: 'Hello, {{name}}!',
  Hogan: 'Hello, {{name}}!',
  Lodash: 'Hello, {{name}}!',
  Underscore: 'Hello, {{name}}!',
  Dot: 'Hello, {{=it.name}}!',
  Dust: 'Hello, {name}!'
};

var ctx = { name: 'Oleg' };

///////////// Precompile templates

Mustache.parse(templateStrings.Mustache);
var handlebarsTpl = Handlebars.compile(templateStrings.Handlebars);
var hoganTpl = Hogan.compile(templateStrings.Hogan);
var lodashTpl = Lodash.template(templateStrings.Lodash);
var underscoreTpl = Underscore.template(templateStrings.Underscore);
var dotTpl = Dot.template(templateStrings.Dot);

var compiledDustTpl = Dust.compile(templateStrings.Dust, 'hello');
Dust.loadSource(compiledDustTpl);

///////////// Define benchmark cases

var benchmarks = {
  'Mustache#render': {
    fn: function() {
      Mustache.render(templateStrings.Mustache, ctx);
    }
  },
  'Handlebars#template': {
    fn: function() {
      handlebarsTpl(ctx);
    }
  },
  'Hogan#render': {
    fn: function() {
      hoganTpl.render(ctx);
    }
  },
  'Lodash#template': {
    fn: function() {
      lodashTpl(ctx);
    }
  },
  'Underscore#template': {
    fn: function() {
      underscoreTpl(ctx);
    }
  },
  'doT#template': {
    fn: function() {
      dotTpl(ctx);
    }
  },
  'Dust#render': {
    defer: true,
    fn: function(deferred) {
      Dust.render('hello', ctx, function(err, out) {
        if ( err ) return deferred.reject( err );

        deferred.resolve();
      });
    }
  }
};

///////////// Initialise suite

var suite = new Benchmark.Suite({
  onError: function(error) {
    console.log(error);
  }
});

suite
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  });

///////////// Load benchmarks

Object.keys(benchmarks).reduce(function(result, key) {
  suite.add(key, benchmarks[key]);
}, suite);

///////////// Run

suite.run({ 'async': true });

