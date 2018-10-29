// @flow
export const toExponential = (aa: number) => (bb: number) => bb.toExponential(aa);
export const toFixed = (aa: number) => (bb: number) => bb.toFixed(aa);
export const toPrecision = (aa: number) => (bb: number) => bb.toPrecision(aa);
export const toString = (aa: number) => (bb: number) => bb.toString(aa);
export const valueOf = () => (bb: number) => bb.valueOf();
export const toLocaleString = () => (bb: number) => bb.toLocaleString();
