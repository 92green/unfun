// @flow
import {pipe} from '../composition';
import {compose} from '../composition';
import {asyncPipe} from '../composition';
import {asyncCompose} from '../composition';
import {maybePipe} from '../composition';
import {maybeCompose} from '../composition';
import {asyncMaybePipe} from '../composition';
import {asyncMaybeCompose} from '../composition';

const double = x => x * 2;
const square = x => x * x;
const squarePromise = x => Promise.resolve(x * x);
const reject = () => Promise.reject('REJECTED');

describe('pipe', () => {

    test('pipe composes from left to right', () => {
        const double = x => x * 2;
        const square = x => x * x;
        expect(pipe(square)(5)).toBe(25);
        expect(pipe(square, double)(5)).toBe(50);
        expect(pipe(double, square, double)(5)).toBe(200);
    });

    test('pipe composes functions from left to right', () => {
        const a = next => x => next('a' + x);
        const b = next => x => next('b' + x);
        const c = next => x => next('c' + x);
        const final = x => x;

        expect(pipe(a, b, c)(final)('')).toBe('abc');
        expect(pipe(b, c, a)(final)('')).toBe('bca');
        expect(pipe(c, a, b)(final)('')).toBe('cab');
    });

    test('pipe throws at runtime if argument is not a function', () => {
        const square = x => x * x;
        const double = x => x * 2;

        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => pipe(square, double, false)(1)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => pipe(square, double, undefined)(1)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => pipe(square, double, true)(1)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => pipe(square, double, NaN)(1)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => pipe(square, double, '42')(1)).toThrow();
    });

    test('pipe returns the first given argument if given no functions', () => {
        expect(pipe()(3)).toBe(3);
        expect(pipe()()).toBe(undefined);
    });

    test('pipe returns the first function if given only one', () => {
        const fn = () => {};

        expect(pipe(fn)).toBe(fn);
    });
});

describe('async', () => {
    test('AsyncPipe composes from left to right', () => {
        expect(asyncPipe(square, double)(5)).resolves.toBe(50);
        expect(asyncPipe(double, square)(5)).resolves.toBe(100);
    });

    test('AsyncCompose composes from right to left', () => {
        expect(asyncCompose(square, double)(5)).resolves.toBe(100);
        expect(asyncCompose(double, square)(5)).resolves.toBe(50);
    });

    test('Asyncs can compose promises', () => {
        expect(asyncCompose(square, squarePromise)(5)).resolves.toBe(625);
        expect(asyncPipe(square, squarePromise)(5)).resolves.toBe(625);
    });

    test('Asyncs will not call after a rejected promise', () => {
        const second = jest.fn();
        expect(asyncPipe(reject, second)('foo')).rejects.toBe('REJECTED');
        expect(second).not.toHaveBeenCalled();

        expect(asyncCompose(second, reject)('foo')).rejects.toBe('REJECTED');
        expect(second).not.toHaveBeenCalled();
    });

    test('AsyncMaybes', () => {
        const second = jest.fn();
        expect(asyncMaybePipe(square, double)(5)).resolves.toBe(50);
        expect(asyncMaybePipe(() => null, second)('foo')).resolves.toBe(null);

        expect(asyncMaybeCompose(double, square)(5)).resolves.toBe(50);
        expect(asyncMaybeCompose(second, () => null)('foo')).resolves.toBe(null);

        expect(second).not.toHaveBeenCalled();
    });
});

