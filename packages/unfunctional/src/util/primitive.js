// @flow
type F = Function;
type V = *;

// Primitive
export const _maybe = (f: F) => (v: V) => v != null ? f(v) : v;
export const _wait = (f: F) => async (v: V) => await f(await v);
export const _pipe = (f: F, g: F) => (v: V) => g(f(v));
export const _compose = (f: F, g: F) => (v: V) => f(g(v));

export const _make = (type: F) => (composer: F) => (f: F, g: F) => composer(type(f), type(g));

export const _multi = (f: F) => (...a: Array<F>) => a.reduce(f);
export const _multiWith= (f: F) => (v: V, ...a: Array<F>) => a.reduce(f)(v);
export const _multiEndWith = (f: F) => (a: Array<*>) => {
    const v = a.pop();
    return a.reduce(f)(v);
};

// Higher order
export const _asyncPipe = _make(_wait)(_pipe);
export const _asyncCompose = _make(_wait)(_compose);
export const _maybePipe = _make(_maybe)(_pipe);
export const _maybeCompose = _make(_maybe)(_compose);

// Higher-higher order
export const _asyncMaybePipe = _make(_maybe)(_asyncPipe);
export const _asyncMaybeCompose = _make(_maybe)(_asyncCompose);

