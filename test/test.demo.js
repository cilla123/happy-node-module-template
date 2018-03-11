import test from 'ava';
import { add, sub } from '../src/demo';

test('add', t => {
    t.is(add(1, 2), 3);
});

test('sub', t => {
    t.is(sub(1, 2), -1);
});