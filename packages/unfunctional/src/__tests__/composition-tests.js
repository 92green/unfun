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

describe('standard', () => {
    test('Pipe composes from left to right', () => {
        expect(pipe(square, double)(5)).toBe(50);
        expect(pipe(double, square)(5)).toBe(100);
    });

    test('Compose composes from right to left', () => {
        expect(compose(square, double)(5)).toBe(100);
        expect(compose(double, square)(5)).toBe(50);
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

describe('perhaps', () => {
    test('MaybePipe composes from left to right', () => {
        expect(maybePipe(square, double)(5)).toBe(50);
        expect(maybePipe(double, square)(5)).toBe(100);
    });

    test('MaybeCompose composes from right to left', () => {
        expect(maybeCompose(square, double)(5)).toBe(100);
        expect(maybeCompose(double, square)(5)).toBe(50);
    });

    test('maybes will not call when the value is null', () => {
        const second = jest.fn();
        maybePipe(() => null, second)('foo');
        maybeCompose(second, () => null)('foo');
        expect(second).not.toHaveBeenCalled();
    });
});
