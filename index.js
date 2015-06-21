var Mustache = require('mustache');
var Hogan = require('Hogan');
var Dot = require('dot');
var Handlebars = require('handlebars');

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
  Dot: 'Hello, {{=it.name}}!'
};

var ctx = { name: 'Oleg' };

///////////// Precompile templates

Mustache.parse(templateStrings.Mustache);
var handlebarsTpl = Handlebars.compile(templateStrings.Handlebars);
var hoganTpl = Hogan.compile(templateStrings.Hogan);
var lodashTpl = Lodash.template(templateStrings.Lodash);
var underscoreTpl = Underscore.template(templateStrings.Underscore);
var dotTpl = Dot.template(templateStrings.Dot);

///////////// Define benchmark cases

var benchmarks = {
  'Mustache#render': function() {
    Mustache.render(templateStrings.Mustache, ctx);
  },
  'Handlebars#template': function() {
    handlebarsTpl(ctx);
  },
  'Hogan#render': function() {
    hoganTpl.render(ctx);
  },
  'Lodash#template': function() {
    lodashTpl(ctx);
  },
  'Underscore#template': function() {
    underscoreTpl(ctx);
  },
  'doT#template': function() {
    dotTpl(ctx);
  }
};

///////////// Initialise suite

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

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

