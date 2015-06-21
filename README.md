# Benchmark template engines

1. Clone repo
2. `npm install`
3. `npm start`

Benchmarked:  
1. [Mustache](https://github.com/janl/mustache.js)  
2. [Handlebars](https://github.com/wycats/handlebars.js/)  
3. [Hogan](http://twitter.github.io/hogan.js/)  
4. [Lodash](https://lodash.com/docs#template)  
5. [Underscore](http://documentcloud.github.io/underscore/#template)  
6. [doT](https://github.com/olado/doT)  

Latest results:

```bash
Mustache#render x 1,085,765 ops/sec ±0.77% (90 runs sampled)
Handlebars#template x 4,094,445 ops/sec ±0.97% (87 runs sampled)
Hogan#render x 4,726,638 ops/sec ±1.13% (88 runs sampled)
Lodash#template x 1,647,525 ops/sec ±0.82% (88 runs sampled)
Underscore#template x 1,555,859 ops/sec ±0.61% (91 runs sampled)
doT#template x 20,730,107 ops/sec ±0.72% (91 runs sampled)
Fastest is doT#template
```
