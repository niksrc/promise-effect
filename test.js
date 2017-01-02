import test from 'ava';
import always from './';

test('title', t => {
	return Promise
		.resolve(1)
		.then(always(x => x + 1))
		.then(x => {
			t.is(x, 1)
		});
});
