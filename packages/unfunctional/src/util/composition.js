// @flow
export const singlePipe = (ff: Function, gg: Function) => (item: *) => gg(ff(item));
export const singleCompose = (ff: Function, gg: Function) => (item: *) => ff(gg(item));

export const singleAsyncPipe = (ff: Function, gg: Function) => async (item: *) => await gg(await ff(item));
export const singleAsyncCompose = (ff: Function, gg: Function) => async (item: *) => await ff(await gg(item));
