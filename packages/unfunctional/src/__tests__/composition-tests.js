// @flow
import {pipe} from '../composition';
import {pipeWith} from '../composition';
import {compose} from '../composition';
import {composeWith} from '../composition';
import {asyncPipe} from '../composition';
import {asyncCompose} from '../composition';
import {maybePipe} from '../composition';
import {maybePipeWith} from '../composition';
import {maybeCompose} from '../composition';
import {maybeComposeWith} from '../composition';
import {asyncMaybePipe} from '../composition';
import {asyncMaybeCompose} from '../composition';

const double = x => x * 2;
const square = x => x * x;
const asyncSquare = x => Promise.resolve(x * x);
const reject = () => Promise.reject('REJECTED');

describe('pipe', () => {

    test('pipe composes from left to right', () => {
        const double = x => x * 2;
        const square = x => x * x;
        expect(pipe(square)(5)).toBe(25);
        expect(pipe(square, double)(5)).toBe(50);
        expect(pipe(double, square, double)(5)).toBe(200);
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

describe('pipeWith', () => {

    test('pipeWith composes from left to right', () => {
        const double = x => x * 2;
        const square = x => x * x;
        expect(pipeWith(5, square)).toBe(25);
        expect(pipeWith(5, square, double)).toBe(50);
        expect(pipeWith(5, double, square, double)).toBe(200);
    });

    test('pipeWith throws at runtime if argument is not a function', () => {
        const square = x => x * x;
        const double = x => x * 2;

        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => pipeWith(1, square, double, false)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => pipeWith(1, square, double, undefined)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => pipeWith(1, square, double, true)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => pipeWith(1, square, double, NaN)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => pipeWith(1, square, double, '42')).toThrow();
    });

    test('pipeWith returns the first given argument if given no functions', () => {
        const a = {};
        expect(pipeWith(a)).toBe(a);
        expect(pipeWith()).toBe(undefined);
    });

});





describe('compose', () => {

    test('compose composes from right to left', () => {
        const double = x => x * 2;
        const square = x => x * x;
        expect(compose(square)(5)).toBe(25);
        expect(compose(square, double)(5)).toBe(100);
        expect(compose(double, square, double)(5)).toBe(200);
    });

    test('compose throws at runtime if argument is not a function', () => {
        const square = x => x * x;
        const double = x => x * 2;

        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => compose(square, double, false)(1)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => compose(square, double, undefined)(1)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => compose(square, double, true)(1)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => compose(square, double, NaN)(1)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => compose(square, double, '42')(1)).toThrow();
    });

    test('compose returns the first given argument if given no functions', () => {
        expect(compose()(3)).toBe(3);
        expect(compose()()).toBe(undefined);
    });

    test('compose returns the first function if given only one', () => {
        const fn = () => {};
        expect(compose(fn)).toBe(fn);
    });
});





describe('composeWith', () => {

    test('composeWith composes from right to left', () => {
        const double = x => x * 2;
        const square = x => x * x;
        expect(composeWith(square, 5)).toBe(25);
        expect(composeWith(square, double, 5)).toBe(100);
        expect(composeWith(double, square, double, 5)).toBe(200);
    });

    test('composeWith throws at runtime if argument is not a function', () => {
        const square = x => x * x;
        const double = x => x * 2;

        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => composeWith(square, double, false, 1)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => composeWith(square, double, undefined, 1)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => composeWith(square, double, true, 1)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => composeWith(square, double, NaN, 1)).toThrow();
        // $FlowFixMe - deliberate misuse of types for testing
        expect(() => composeWith(square, double, '42', 1)).toThrow();
    });

    test('composeWith returns the first given argument if given no functions', () => {
        const a = {};
        expect(composeWith(a)).toBe(a);
        expect(composeWith()).toBe(undefined);
    });

});



describe('maybe', () => {

    test('maybe will bail early and return null', () => {
        const second = jest.fn();
        expect(maybePipe(square, double)(5)).toBe(50);
        expect(maybePipe(() => null, second)('foo')).toBe(null);
        expect(maybePipeWith(5, square, double)).toBe(50);
        expect(maybePipeWith('foo', () => null, second)).toBe(null);

        expect(maybeCompose(double, square)(5)).toBe(50);
        expect(maybeCompose(second, () => null)('foo')).toBe(null);
        expect(maybeComposeWith(double, square, 5)).toBe(50);
        expect(maybeComposeWith(second, () => null, 'foo')).toBe(null);

        expect(second).not.toHaveBeenCalled();
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
        expect(asyncCompose(square, asyncSquare)(5)).resolves.toBe(625);
        expect(asyncPipe(square, asyncSquare)(5)).resolves.toBe(625);
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

