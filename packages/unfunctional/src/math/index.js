// @flow


//
// Standard

export const abs = () => (aa) => Math.abs(aa);
export const acos = () => (aa) => Math.acos(aa);
export const acosh = () => (aa) => Math.acosh(aa);
export const asin = () => (aa) => Math.asin(aa);
export const asinh = () => (aa) => Math.asinh(aa);
export const atan = () => (aa) => Math.atan(aa);
export const atanh = () => (aa) => Math.atanh(aa);
export const atan2 = (bb) => (aa) => Math.atan2(aa, bb); //2
export const ceil = () => (aa) => Math.ceil(aa);
export const cbrt = () => (aa) => Math.cbrt(aa);
export const expm1 = () => (aa) => Math.expm1(aa);
export const clz32 = () => (aa) => Math.clz32(aa);
export const cos = () => (aa) => Math.cos(aa);
export const cosh = () => (aa) => Math.cosh(aa);
export const exp = () => (aa) => Math.exp(aa);
export const floor = () => (aa) => Math.floor(aa);
export const fround = () => (aa) => Math.fround(aa);
export const hypot = (...rest) => (aa) => Math.hypot(aa, ...rest); //2+
export const imul = (bb) => (aa) => Math.imul(aa, bb); //2
export const log = () => (aa) => Math.log(aa);
export const log1p = () => (aa) => Math.log1p(aa);
export const log2 = () => (aa) => Math.log2(aa);
export const log10 = () => (aa) => Math.log10(aa);
export const max = (...rest) => (aa) => Math.max(aa, ...rest); //2
export const min = (...rest) => (aa) => Math.min(aa, ...rest); //2
export const pow = (bb) => (aa) => Math.pow(aa, bb); //2
export const random = () => (aa) => Math.random(aa);
export const round = () => (aa) => Math.round(aa);
export const sign = () => (aa) => Math.sign(aa);
export const sin = () => (aa) => Math.sin(aa);
export const sinh = () => (aa) => Math.sinh(aa);
export const sqrt = () => (aa) => Math.sqrt(aa);
export const tan = () => (aa) => Math.tan(aa);
export const tanh = () => (aa) => Math.tanh(aa);
export const trunc = () => (aa) => Math.trunc(aa);


//
// Methods

export const toExponential = (aa: number) => (bb: number) => bb.toExponential(aa);
export const toFixed = (aa: number) => (bb: number) => bb.toFixed(aa);
export const toPrecision = (aa: number) => (bb: number) => bb.toPrecision(aa);
export const toString = (aa: number) => (bb: number) => bb.toString(aa);
export const toLocaleString = () => (bb: number) => bb.toLocaleString();


// Constants
export const E = () =>  Math.E;
export const LN10 = () => Math.LN10;
export const LN2 = () => Math.LN2;
export const LOG10E = () => Math.LOG10E;
export const LOG2E = () => Math.LOG2E;
export const PI = () => Math.PI;
export const SQRT1_2 = () => Math.SQRT1_2;
export const SQRT2 = () => Math.SQRT2;
