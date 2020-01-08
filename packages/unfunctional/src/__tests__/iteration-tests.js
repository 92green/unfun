// @flow
import {asyncMap} from '../iteration';

const double = x => x * 2;
const asyncDouble = x => Promise.resolve(x * 2);

const list = [1,2,3];
const asyncList = Promise.resolve([1,2,3]);

describe('asyncMap', () => {

    it('can map normal arrays', () => {
        expect(asyncMap(double)(list)).resolves.toEqual([2,4,6]);
    });

    it('can map normal arrays over async functions', () => {
        expect(asyncMap(asyncDouble)(list)).resolves.toEqual([2,4,6]);
    });

    it('can map promise arrays', () => {
        expect(asyncMap(asyncDouble)(asyncList)).resolves.toEqual([2,4,6]);
    });

    it('can map promise arrays over async functions', () => {
        expect(asyncMap(asyncDouble)(asyncList)).resolves.toEqual([2,4,6]);
    });

});

