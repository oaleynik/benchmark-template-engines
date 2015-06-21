# Benchmark template engines

1. Clone repo
2. `npm install`
3. `npm start`

Benchmarked:  
1. [Mustache](https://github.com/janl/mustache.js)  
2. [Hogan](http://twitter.github.io/hogan.js/)  
3. [Lodash](https://lodash.com/docs#template)

Latest results:

```bash
Mustache#render x 1,090,666 ops/sec ±0.77% (95 runs sampled)
Hogan#render x 4,701,919 ops/sec ±0.75% (96 runs sampled)
Lodash#template x 1,329,356 ops/sec ±0.88% (95 runs sampled)
Fastest is Hogan#render
```
