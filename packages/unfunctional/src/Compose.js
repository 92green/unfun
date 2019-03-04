
// compose <A,B,C>(f: A => B, g: B => C): A => C;
//export const _compose = (f, g) => (a) => f(g(a));
export default class ComposeTrain<F> {
    f: F;
    constructor(f: F) {
        this.f = f;
    }
    and<A,B,C>(g: A => B): ComposeTrain<B => C> {
        return new ComposeTrain(v => this.apply(this.f, this.apply(g, v)));
    }
    apply(fn, value) {
        return fn(value);
    }
    with(value: *): * {
        return this.apply(this.f, value);
    }
    get value() {
        return this.f;
    }
}


export class MaybeComposeTrain extends ComposeTrain<T> {
    apply(fn, value) {
        return value != null ? fn(value) : value;
    }
}

export class AsyncComposeTrain extends ComposeTrain<T> {
    async apply(fn, value) {
        return await fn(await value);
    }
}

export const Compose = (fn) => new ComposeTrain(fn);
export const MaybeCompose = (fn) => new MaybeComposeTrain(fn);
export const AsyncCompose = (fn) => new AsyncComposeTrain(fn);
