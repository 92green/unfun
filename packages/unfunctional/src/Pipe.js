
// compose <A,B,C>(f: A => B, g: B => C): A => C;
//export const _compose = (f, g) => (a) => f(g(a));
//

//export const _pipe = (f, g) => (a) => g(f(a));
//
export default class PipeTrain<F> {
    f: F;
    constructor(f: F) {
        this.f = f;
    }
    and<A,B,C>(g: A => B): PipeTrain<B => C> {
        const {f, apply} = this;
        return new PipeTrain(v => apply(g, apply(f, v)));
        return new PipeTrain(v => g(f(v)));
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


export class MaybePipeTrain extends PipeTrain<T> {
    apply(fn, value) {
        return value != null ? fn(value) : value;
    }
}

export class AsyncPipeTrain extends PipeTrain<T> {
    async apply(fn, value) {
        return await fn(await value);
    }
}

export const Pipe = (fn) => new PipeTrain(fn);
export const MaybePipe = (fn) => new MaybePipeTrain(fn);
export const AsyncPipe = (fn) => new AsyncPipeTrain(fn);
