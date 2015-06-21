var Mustache = require('mustache');
var Hogan = require('Hogan');

var Lodash = require('lodash');
Lodash.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

var tpl = 'Hello, {{name}}!';
var ctx = { name: 'Oleg' };

Mustache.parse(tpl);
var hoganTpl = Hogan.compile(tpl);
var lodashTpl = Lodash.template(tpl);

var suites = {
  'Mustache#render': function() {
    Mustache.render(tpl, ctx);
  },
  'Hogan#render': function() {
    hoganTpl.render(ctx);
  },
  'Lodash#template': function() {
    lodashTpl(ctx);
  }
};

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

suite
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  });

Object.keys(suites).reduce(function(result, key) {
  suite.add(key, suites[key]);
}, suite);

suite.run({ 'async': true });

