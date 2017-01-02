# promise-effect [![Build Status](https://travis-ci.org/niksrc/promise-effect.svg?branch=master)](https://travis-ci.org/niksrc/promise-effect)

> Runs a function as promise callback and resolves the original value


## Install

```
$ npm install --save promise-effect
```


## Usage

```js
const effect = require('promise-effect');

Promise
	.resolve(1)
	.then(effect(x => {
		// Destroy the world
		// setSomeCache('My x value' , x);
		console.log(x) //=> 1;
	}))
	.then(x => {
		x === 1 //=> true
	});
```

## WHY
Because modularity FTW and i was seeing this pattern a lot. Much cleaner now :)

## API

### effect(fn)

#### fn

Type: `function`

single param function that gets previous resolved value as parameter

## License

MIT © [Nikhil Srivastava](http://niksrc.github.io)
