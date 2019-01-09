// @flow
type F = Function;
type V = *;

// Type Functions
export const _identity = (v: V): V => v;
export const _maybe = (f: F) => (v: V) => v != null ? f(v) : v;
export const _async = (f: F) => async (v: V) => await f(await v);

// Composition Functions
export const _pipe = (f: F, g: F) => (v: V) => g(f(v));
export const _compose = (f: F, g: F) => (v: V) => f(g(v));

// Combine a type and a composition function
export const _make = (type: F) => (composer: F) => (f: F, g: F) => composer(type(f), type(g));

//
// Multi Functions
//
export const _multi = (f: F) => (...a: Array<F>) => {
    if(a.length === 0) {
        a = [_identity];
    }
    return a.reduce(f);
};
export const _multiWith = (f: F) => (v: V, ...a: Array<F>) => {
    if(a.length === 0) {
        return v;
    }
    return a.reduce(f)(v);
};
export const _multiEndWith = (f: F) => (...a: Array<*>) => {
    if(a.length === 1) {
        return a[0];
    }
    const v = a.pop();
    return a.reduce(f)(v);
};

// Higher order
export const _asyncPipe = _make(_async)(_pipe);
export const _asyncCompose = _make(_async)(_compose);
export const _maybePipe = _make(_maybe)(_pipe);
export const _maybeCompose = _make(_maybe)(_compose);

// Higher-higher order
export const _asyncMaybePipe = _make(_maybe)(_asyncPipe);
export const _asyncMaybeCompose = _make(_maybe)(_asyncCompose);

