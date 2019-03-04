// @flow
import {MaybePipe} from '../Pipe';
import {AsyncPipe} from '../Pipe';
import {Pipe} from '../Pipe';

const double = x => x * 2;
const square = x => x * x;
const squarePromise = x => Promise.resolve(x * x);
const reject = () => Promise.reject('REJECTED');


test('pipe', () => {
    const value = Pipe(double)
        .and(square)
        .with(2)

    expect(value).toBe(16);
});

test('maybePipe', () => {
    const spy = jest.fn();
    const value = MaybePipe(() => null)
        .and(spy)
        .with(2)

    expect(spy).not.toHaveBeenCalled();
});

test('maybePipe still works', () => {
    const value = MaybePipe(double)
        .and(square)
        .with(2)

    expect(value).toBe(16);
});

describe('async', () => {
    test('AsyncPipe pipes from right to left', () => {
        expect(AsyncPipe(square).and(double).with(5)).resolves.toBe(50);
        expect(AsyncPipe(double).and(square).with(5)).resolves.toBe(100);
    });

    //test('Asyncs can pipe promises', () => {
        //expect(asyncPipe(square, squarePromise)(5)).resolves.toBe(625);
        //expect(asyncPipe(square, squarePromise)(5)).resolves.toBe(625);
    //});

    //test('Asyncs will not call after a rejected promise', () => {
        //const second = jest.fn();
        //expect(asyncPipe(reject, second)('foo')).rejects.toBe('REJECTED');
        //expect(second).not.toHaveBeenCalled();

        //expect(asyncPipe(second, reject)('foo')).rejects.toBe('REJECTED');
        //expect(second).not.toHaveBeenCalled();
    //});

    //test('AsyncMaybes', () => {
        //const second = jest.fn();
        //expect(asyncMaybePipe(square, double)(5)).resolves.toBe(50);
        //expect(asyncMaybePipe(() => null, second)('foo')).resolves.toBe(null);

        //expect(asyncMaybePipe(double, square)(5)).resolves.toBe(50);
        //expect(asyncMaybePipe(second, () => null)('foo')).resolves.toBe(null);

        //expect(second).not.toHaveBeenCalled();
    //});
});
