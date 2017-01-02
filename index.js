'use strict';
const Promise = require('any-promise');
const isFunction = require('is-function');

module.exports = (fn, val) => {
	fn = fn || (() => {});
	if (!isFunction) {
		throw new Error('First Parameter of promise-always must be a function');
	}

	return function () {
		fn(val);
		return Promise.resolve(val);
	};
};
