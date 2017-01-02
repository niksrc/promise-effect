'use strict';
const Promise = require('any-promise');
const isFunction = require('is-function');

module.exports = fn => {
	if (!isFunction(fn)) {
		throw new Error('Parameter must be a function');
	}

	return function (val) {
		fn(val);
		return Promise.resolve(val);
	};
};
