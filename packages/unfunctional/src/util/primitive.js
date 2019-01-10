// Type Functions
export const _identity = (v) => v;
export const _maybe = (f) => (a) => a != null ? f(a) : a;
export const _async = (f) => async (a) => await f(await a);

// Composition Functions
export const _pipe = (f, g) => (a) => g(f(a));
export const _compose = (f, g) => (a) => f(g(a));

// Combine a type and a composition function
export const _make = (type) => (composer) => (f, g) => composer(type(f), type(g));

// Multi Functions
export const _multi = (f) => (...a) => {
    if(a.length === 0) {
        a = [_identity];
    }
    return a.reduce(f);
};

export const _multiWith = (f) => (v, ...a) => {
    if(a.length === 0) {
        return v;
    }
    return a.reduce(f)(v);
};

export const _multiEndWith = (f) => (...a) => {
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







