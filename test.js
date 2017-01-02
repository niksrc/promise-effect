import test from 'ava';
import run from './';

function shouldRun(t) {
	let y = false;
	return Promise
		.resolve(1)
		.then(run(x => {
			y = true;
			x = 2;
			return x;
		}))
		.then(x => {
			t.is(x, 1);
			t.is(y, true);
		});
}

async function shouldFail(t) {
	try {
		await run();
		t.fail();
	} catch (err) {
		t.pass(err);
	}
}

test('should run function', shouldRun);
test('should fail with no param', shouldFail);
