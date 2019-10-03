//@flow
import * as method from '../math';
import * as standard from '../math';

jest.spyOn(Math, 'random');

// Methods
test.each([
    ['toExponential', 1, 3, '1.000e+0'],
    ['toFixed', 1.11111, 2, '1.11'],
    ['toPrecision', 1.11111, 2, '1.1'],
    ['toString', 15, 16, 'f'],
    ['toLocaleString', 1.11111, 'arab', '1.111'],
])(
    '.%s()',
    (name, aa, bb, expected) => {
        expect(method[name](bb)(aa)).toBe(expected);
    }
);

// Standard
test.each([
    ['abs', -1, undefined, 1],
    ['acos', 0.5, undefined, 1.0471975511965979],
    ['acosh', 2, undefined, 1.3169578969248166],
    ['asin', 1, , 1.5707963267948966],
    ['asinh', 1, , 0.881373587019543],
    ['atan', 1, , 0.7853981633974483],
    ['atanh', .5, , 0.5493061443340548],
    ['atan2', 90, 45, 1.1071487177940904],
    ['ceil', 1.2, , 2],
    ['cbrt', 2, , 1.2599210498948732],
    ['expm1', -1, , -0.6321205588285577],
    ['clz32', 1000, , 22],
    ['cos', 1, , 0.5403023058681398],
    ['cosh', 1, , 1.5430806348152437],
    ['exp', -1, , 0.36787944117144233],
    ['floor', 1.3333, , 1],
    ['fround', 1.337, , 1.3370000123977661],
    ['hypot', 3, 4, 5],
    ['imul', 0xfffffffe, 5, -10],
    ['log', 10, , 2.302585092994046],
    ['log1p', 1, , 0.6931471805599453],
    ['log2', 3, , 1.584962500721156],
    ['log10', 2, , 0.3010299956639812],
    ['max', 10, 2, 10],
    ['min', 2, 10, 2],
    ['pow', 2, 10, 1024],
    //['random', , , Math.random()],
    ['round', -20.5, , -20],
    ['sign', -3, , -1],
    ['sin', 1, , 0.8414709848078965],
    ['sinh', 1, , 1.1752011936438014],
    ['sqrt', 9, , 3],
    ['tan', 1, , 1.5574077246549023],
    ['tanh', 1, , 0.7615941559557649],
    ['trunc', 42.1231, , 42],
])(
    'Math.%s()',
    (name, aa, bb, expected) => {
        expect(standard[name](bb)(aa)).toBe(expected);
    }
);

test('random()', () => {
    standard.random()();
    expect(Math.random).toHaveBeenCalled();
})

// Constants
test.each([
    ['E', Math.E],
    ['LN10', Math.LN10],
    ['LN2', Math.LN2],
    ['LOG10E', Math.LOG10E],
    ['LOG2E', Math.LOG2E],
    ['PI', Math.PI],
    ['SQRT1_2', Math.SQRT1_2],
    ['SQRT2', Math.SQRT2]
])(
    'Math.%s',
    (name, expected) => {
        expect(standard[name]()).toBe(expected);
    }
);
