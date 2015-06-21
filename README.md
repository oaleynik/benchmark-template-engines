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
7. [Dustjs-Linkedin](http://www.dustjs.com/)

> Dustjs-Linkedin engine shows some pretty strange (extremely slow) results. Probably benchmark for this engine require additional configuration. (This is the only deferred benchmark in the list)

Latest results:

```bash
Mustache#render x 1,000,469 ops/sec ±1.96% (88 runs sampled)
Handlebars#template x 3,874,705 ops/sec ±1.88% (91 runs sampled)
Hogan#render x 4,178,385 ops/sec ±4.33% (79 runs sampled)
Lodash#template x 1,603,763 ops/sec ±1.97% (83 runs sampled)
Underscore#template x 1,549,587 ops/sec ±1.25% (90 runs sampled)
doT#template x 19,192,405 ops/sec ±1.59% (86 runs sampled)
Dust#render x 664 ops/sec ±1.23% (81 runs sampled)
Fastest is doT#template
```
