// @flow
import {_pipe} from '../primitive';
import {_compose} from '../primitive';
import {_maybe} from '../primitive';
import {_async} from '../primitive';

import {_make} from '../primitive';
import {_multi} from '../primitive';
import {_multiWith} from '../primitive';
import {_multiEndWith} from '../primitive';

import {_maybePipe} from '../primitive';
import {_maybeCompose} from '../primitive';
import {_asyncPipe} from '../primitive';
import {_asyncCompose} from '../primitive';
import {_asyncMaybePipe} from '../primitive';
import {_asyncMaybeCompose} from '../primitive';


const divide = y => x => x / y;
const add = y => x => x + y;
const squarePromise = x => Promise.resolve(x * x);
const reject = () => Promise.reject('REJECTED');


describe('pipe / compose', () => {
    const addThenDivide = _pipe(add(2), divide(2));
    const divideThenAdd = _compose(add(2), divide(2));

    test('pipe and compose return functions', () => {
        expect(typeof addThenDivide).toBe('function');
        expect(typeof divideThenAdd).toBe('function');
    });

    test('pipe executes f then g', () => {
        expect(addThenDivide(10)).toBe(6);
        expect(addThenDivide(10)).not.toBe(7);
    });

    test('compose executes g then f', () => {
        expect(divideThenAdd(10)).not.toBe(6);
        expect(divideThenAdd(10)).toBe(7);
    });

});

describe('types', () => {
});

describe('make / multi', () => {
});

describe('higher order pipes', () => {
});
