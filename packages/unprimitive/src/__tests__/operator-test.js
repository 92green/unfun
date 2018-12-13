//@flow
import {add} from '../operator';
import {subtract} from '../operator';
import {multiply} from '../operator';
import {divide} from '../operator';
import {power} from '../operator';
import {equals} from '../operator';
import {notEquals} from '../operator';
import {abstractEquals} from '../operator';
import {abstractNotEquals} from '../operator';
import {gt} from '../operator';
import {gte} from '../operator';
import {lt} from '../operator';
import {lte} from '../operator';
import {not} from '../operator';


test('add', () => {
    expect(add(1)(2)).toBe(2 + 1);
});

test('subtract', () => {
    expect(subtract(1)(2)).toBe(2 - 1);
});

test('multiply', () => {
    expect(multiply(1)(2)).toBe(2 * 1);
});

test('divide', () => {
    expect(divide(1)(2)).toBe(2 / 1);
});

test('power', () => {
    expect(power(3)(2)).toBe(2 ** 3);
});

describe('equals', () => {
    test.each([
        [1,1],
        [true, true],
    ])(
        'equals: %p === %p',
        (aa, bb) => {
            expect(equals(aa)(bb)).toBe(bb === aa);
        }
    );

});


test('notEquals', () => {
    expect(notEquals(3)(2)).toBe(true);
    expect(notEquals(true)(false)).toBe(true);
});

test('abstractEquals', () => {
    expect(abstractEquals(3)(3)).toBe(true);
    expect(abstractEquals(true)(1)).toBe(true);
});

test('abstractNotEquals', () => {
    expect(abstractNotEquals(2)(3)).toBe(true);
    expect(abstractNotEquals(false)(1)).toBe(true);
});

test('gt', () => expect(gt(2)(3)).toBe(true));
test('lt', () => expect(lt(3)(2)).toBe(true));

//gte
test.each([
    [1,1, true],
    [3,2, true],
    [-1,-3, true],
    [0,3, false],
    [-1,3, false]
])(
    'gte: %p >= %p is %p',
    (aa, bb, expected) => expect(gte(bb)(aa)).toBe(expected)
);

//lte
test.each([
    [1,1, true],
    [2,3, true],
    [-3,-1, true],
    [3,0, false],
    [3,-1, false]
])(
    'lte: %i <= %i is %p',
    (aa, bb, expected) => expect(lte(bb)(aa)).toBe(expected)
);

test('not', () => {
    expect(not()(true)).toBe(false);
    expect(not()(false)).toBe(true);
    expect(not()("asdas")).toBe(false);
});
