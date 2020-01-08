// @flow
import {_compose} from '../primitive';
import {_pipe} from '../primitive';
import {_maybe} from '../primitive';
import {_identity} from '../primitive';
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

    test('maybe only executes function if value is not null or undefined', () => {
        const spy = jest.fn();
        _maybe(spy)('foo');
        _maybe(spy)(null);
        _maybe(spy)(undefined);
        expect(spy).toHaveBeenCalledWith('foo');
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test('async will await functions and values', () => {
        const id = x => x;
        expect(_async(id)(2)).resolves.toBe(2);
        expect(_async(id)(Promise.resolve(2))).resolves.toBe(2);
        expect(_async(squarePromise)(2)).resolves.toBe(4);
        expect(_async(reject)(2)).rejects.toBe('REJECTED');
    });
});

describe('make / multi', () => {
    const f = () => 1;
    const g = () => 2;
    const id = x => x;

    test('make will call a type for f,g and pass that to the composer', () => {
        const type = jest.fn(() => 'FOO');
        const composer = jest.fn();
        _make(type)(composer)(f, g);
        expect(type).toHaveBeenCalledWith(f);
        expect(type).toHaveBeenCalledWith(g);
        expect(composer).toHaveBeenCalledWith('FOO', 'FOO');
    });

    test('multi will reduce an array of functions over a predicate', () => {
        const predicate = jest.fn();
        _multi(predicate)(f, g, f, g);
        expect(predicate).toHaveBeenCalledTimes(3);
    });

    test('multi args array will default to an Array<identity>', () => {
        const predicate = jest.fn();
        const result = _multi(predicate)();
        expect(predicate).toHaveBeenCalledTimes(0);
        expect(result).toEqual(_identity);
    });

    test('multiWith will reduce functions over a predicate starting with value', () => {
        const predicate = jest.fn(_pipe);
        const result = _multiWith(predicate)('FOO', f, g, () => 'fizz');
        expect(predicate).toHaveBeenCalledTimes(2);
        expect(result).toBe('fizz');
    });

    test('multiWith args array will default to an Array<identity>', () => {
        const predicate = jest.fn();
        const result = _multiWith(predicate)('foo');
        expect(predicate).toHaveBeenCalledTimes(0);
        expect(result).toEqual('foo');
    });

    test('multiEndWith will reduce functions over a predicate starting with the last value', () => {
        const predicate = jest.fn(_pipe);
        const result = _multiEndWith(predicate)(f, g, () => 'fizz', 'FOO');
        expect(predicate).toHaveBeenCalledTimes(2);
        expect(result).toBe('fizz');
    });

    test('multiEndWith args array will default to an Array<identity>', () => {
        const predicate = jest.fn();
        const result = _multiEndWith(predicate)('foo');
        expect(predicate).toHaveBeenCalledTimes(0);
        expect(result).toEqual('foo');
    });

});

