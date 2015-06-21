var Mustache = require('mustache');
var Hogan = require('Hogan');
var Dot = require('dot');

var Lodash = require('lodash');
Lodash.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

///////////// Define template strings and context

var templateStrings = {
  Mustache: 'Hello, {{name}}!',
  Hogan: 'Hello, {{name}}!',
  Lodash: 'Hello, {{name}}!',
  Dot: 'Hello, {{=it.name}}!'
};

var ctx = { name: 'Oleg' };

///////////// Precompile templates

Mustache.parse(templateStrings.Mustache);
var hoganTpl = Hogan.compile(templateStrings.Hogan);
var lodashTpl = Lodash.template(templateStrings.Lodash);
var dotTpl = Dot.template(templateStrings.Dot);

///////////// Define benchmark cases

var benchmarks = {
  'Mustache#render': function() {
    Mustache.render(templateStrings.Mustache, ctx);
  },
  'Hogan#render': function() {
    hoganTpl.render(ctx);
  },
  'Lodash#template': function() {
    lodashTpl(ctx);
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

