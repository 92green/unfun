// @flow
import {MaybeCompose} from '../Compose';
import {AsyncCompose} from '../Compose';
import {Compose} from '../Compose';

const double = x => x * 2;
const square = x => x * x;
const squarePromise = x => Promise.resolve(x * x);
const reject = () => Promise.reject('REJECTED');


test('compose', () => {
    const value = Compose(double)
        .and(square)
        .with(2)

    expect(value).toBe(8);
});

test('maybeCompose', () => {
    const spy = jest.fn();
    const value = MaybeCompose(spy)
        .and(() => null)
        .with(2)

    expect(spy).not.toHaveBeenCalled();
});

test('maybeCompose still works', () => {
    const value = MaybeCompose(double)
        .and(square)
        .with(2)

    expect(value).toBe(8);
});

describe('async', () => {
    test('AsyncCompose composes from right to left', () => {
        expect(AsyncCompose(square).and(double).with(5)).resolves.toBe(100);
        expect(AsyncCompose(double).and(square).with(5)).resolves.toBe(50);
    });

    //test('Asyncs can compose promises', () => {
        //expect(asyncCompose(square, squarePromise)(5)).resolves.toBe(625);
        //expect(asyncPipe(square, squarePromise)(5)).resolves.toBe(625);
    //});

    //test('Asyncs will not call after a rejected promise', () => {
        //const second = jest.fn();
        //expect(asyncPipe(reject, second)('foo')).rejects.toBe('REJECTED');
        //expect(second).not.toHaveBeenCalled();

        //expect(asyncCompose(second, reject)('foo')).rejects.toBe('REJECTED');
        //expect(second).not.toHaveBeenCalled();
    //});

    //test('AsyncMaybes', () => {
        //const second = jest.fn();
        //expect(asyncMaybePipe(square, double)(5)).resolves.toBe(50);
        //expect(asyncMaybePipe(() => null, second)('foo')).resolves.toBe(null);

        //expect(asyncMaybeCompose(double, square)(5)).resolves.toBe(50);
        //expect(asyncMaybeCompose(second, () => null)('foo')).resolves.toBe(null);

        //expect(second).not.toHaveBeenCalled();
    //});
});
