// @flow
type Fn<A,B> = (a: A) => B; // unary function
type Pn<A, B> = (a: A) => Promise<B>|B; // async unary funtion
type Mn<A, B> = (a: A) => B|null // maybe unary function
type MP<A, B> = (a: A) => Promise<B>|B|null; // async maybe unary function



//
// Normal Pipes

export type Pipe =
    (<A, B, C, D, E, F, G>(Fn<A,B>, Fn<B,C>, Fn<C,D>, Fn<D,E>, Fn<E,F>, Fn<F,G>) => Fn<A,G>) &
    (<A, B, C, D, E, F>(Fn<A,B>, Fn<B,C>, Fn<C,D>, Fn<D,E>, Fn<E,F>) => Fn<A,F>) &
    (<A, B, C, D, E>(Fn<A,B>, Fn<B,C>, Fn<C,D>, Fn<D,E>) => Fn<A,E>) &
    (<A, B, C, D>(Fn<A,B>, Fn<B,C>, Fn<C,D>) => Fn<A,D>) &
    (<A, B, C>(Fn<A,B>, Fn<B,C>) => Fn<A,C>) &
    (<A, B>(Fn<A,B>) => Fn<A,B>)
;

export type Compose =
    (<A, B, C, D, E, F, G>(Fn<F,G>, Fn<E,F>, Fn<D,E>, Fn<C,D>, Fn<B,C>, Fn<A,B>) => Fn<A,G>) &
    (<A, B, C, D, E, F>(Fn<E,F>, Fn<D,E>, Fn<C,D>, Fn<B,C>, Fn<A,B>) => Fn<A,F>) &
    (<A, B, C, D, E>(Fn<D,E>, Fn<C,D>, Fn<B,C>, Fn<A,B>) => Fn<A,E>) &
    (<A, B, C, D>(Fn<C,D>, Fn<B,C>, Fn<A,B>) => Fn<A,D>) &
    (<A, B, C>(Fn<B,C>, Fn<A,B>) => Fn<A,C>) &
    (<A, B>(Fn<A,B>) => Fn<A,B>)
;

export type MaybePipe =
    (<A, B, C, D, E, F, G>(Mn<A,B>, Mn<B,C>, Mn<C,D>, Mn<D,E>, Mn<E,F>, Mn<F,G>) => Mn<A,G>) &
    (<A, B, C, D, E, F>(Mn<A,B>, Mn<B,C>, Mn<C,D>, Mn<D,E>, Mn<E,F>) => Mn<A,F>) &
    (<A, B, C, D, E>(Mn<A,B>, Mn<B,C>, Mn<C,D>, Mn<D,E>) => Mn<A,E>) &
    (<A, B, C, D>(Mn<A,B>, Mn<B,C>, Mn<C,D>) => Mn<A,D>) &
    (<A, B, C>(Mn<A,B>, Mn<B,C>) => Mn<A,C>) &
    (<A, B>(Mn<A,B>) => Mn<A,B>)
;

export type MaybeCompose =
    (<A, B, C, D, E, F, G>(Mn<F,G>, Mn<E,F>, Mn<D,E>, Mn<C,D>, Mn<B,C>, Mn<A,B>) => Mn<A,G>) &
    (<A, B, C, D, E, F>(Mn<E,F>, Mn<D,E>, Mn<C,D>, Mn<B,C>, Mn<A,B>) => Mn<A,F>) &
    (<A, B, C, D, E>(Mn<D,E>, Mn<C,D>, Mn<B,C>, Mn<A,B>) => Mn<A,E>) &
    (<A, B, C, D>(Mn<C,D>, Mn<B,C>, Mn<A,B>) => Mn<A,D>) &
    (<A, B, C>(Mn<B,C>, Mn<A,B>) => Mn<A,C>) &
    (<A, B>(Mn<A,B>) => Mn<A,B>)
;

export type AsyncPipe =
    (<A, B, C, D, E, F, G>(Pn<A,B>, Pn<B,C>, Pn<C,D>, Pn<D,E>, Pn<E,F>, Pn<F,G>) => Pn<A,G>) &
    (<A, B, C, D, E, F>(Pn<A,B>, Pn<B,C>, Pn<C,D>, Pn<D,E>, Pn<E,F>) => Pn<A,F>) &
    (<A, B, C, D, E>(Pn<A,B>, Pn<B,C>, Pn<C,D>, Pn<D,E>) => Pn<A,E>) &
    (<A, B, C, D>(Pn<A,B>, Pn<B,C>, Pn<C,D>) => Pn<A,D>) &
    (<A, B, C>(Pn<A,B>, Pn<B,C>) => Pn<A,C>) &
    (<A, B>(Pn<A,B>) => Pn<A,B>)
;

export type AsyncCompose =
    (<A, B, C, D, E, F, G>(Pn<F,G>, Pn<E,F>, Pn<D,E>, Pn<C,D>, Pn<B,C>, Pn<A,B>) => Pn<A,G>) &
    (<A, B, C, D, E, F>(Pn<E,F>, Pn<D,E>, Pn<C,D>, Pn<B,C>, Pn<A,B>) => Pn<A,F>) &
    (<A, B, C, D, E>(Pn<D,E>, Pn<C,D>, Pn<B,C>, Pn<A,B>) => Pn<A,E>) &
    (<A, B, C, D>(Pn<C,D>, Pn<B,C>, Pn<A,B>) => Pn<A,D>) &
    (<A, B, C>(Pn<B,C>, Pn<A,B>) => Pn<A,C>) &
    (<A, B>(Pn<A,B>) => Pn<A,B>)
;

export type AsyncMaybePipe =
    (<A, B, C, D, E, F, G>(MP<A,B>, MP<B,C>, MP<C,D>, MP<D,E>, MP<E,F>, MP<F,G>) => MP<A,G>) &
    (<A, B, C, D, E, F>(MP<A,B>, MP<B,C>, MP<C,D>, MP<D,E>, MP<E,F>) => MP<A,F>) &
    (<A, B, C, D, E>(MP<A,B>, MP<B,C>, MP<C,D>, MP<D,E>) => MP<A,E>) &
    (<A, B, C, D>(MP<A,B>, MP<B,C>, MP<C,D>) => MP<A,D>) &
    (<A, B, C>(MP<A,B>, MP<B,C>) => MP<A,C>) &
    (<A, B>(MP<A,B>) => MP<A,B>)
;

export type AsyncMaybeCompose =
    (<A, B, C, D, E, F, G>(MP<F,G>, MP<E,F>, MP<D,E>, MP<C,D>, MP<B,C>, MP<A,B>) => MP<A,G>) &
    (<A, B, C, D, E, F>(MP<E,F>, MP<D,E>, MP<C,D>, MP<B,C>, MP<A,B>) => MP<A,F>) &
    (<A, B, C, D, E>(MP<D,E>, MP<C,D>, MP<B,C>, MP<A,B>) => MP<A,E>) &
    (<A, B, C, D>(MP<C,D>, MP<B,C>, MP<A,B>) => MP<A,D>) &
    (<A, B, C>(MP<B,C>, MP<A,B>) => MP<A,C>) &
    (<A, B>(MP<A,B>) => MP<A,B>)
;



//
// PipeWiths

export type PipeWith =
    (<A, B, C, D, E, F, G>(A, Fn<A,B>, Fn<B,C>, Fn<C,D>, Fn<D,E>, Fn<E,F>, Fn<F,G>) => G) &
    (<A, B, C, D, E, F>(A, Fn<A,B>, Fn<B,C>, Fn<C,D>, Fn<D,E>, Fn<E,F>) => F) &
    (<A, B, C, D, E>(A, Fn<A,B>, Fn<B,C>, Fn<C,D>, Fn<D,E>) => E) &
    (<A, B, C, D>(A, Fn<A,B>, Fn<B,C>, Fn<C,D>) => D) &
    (<A, B, C>(A, Fn<A,B>, Fn<B,C>) => C) &
    (<A, B>(A, Fn<A,B>) => B)
;

export type ComposeWith =
    (<A, B, C, D, E, F, G>(Fn<F,G>, Fn<E,F>, Fn<D,E>, Fn<C,D>, Fn<B,C>, Fn<A,B>, A) => G) &
    (<A, B, C, D, E, F>(Fn<E,F>, Fn<D,E>, Fn<C,D>, Fn<B,C>, Fn<A,B>, A) => F) &
    (<A, B, C, D, E>(Fn<D,E>, Fn<C,D>, Fn<B,C>, Fn<A,B>, A) => E) &
    (<A, B, C, D>(Fn<C,D>, Fn<B,C>, Fn<A,B>, A) => D) &
    (<A, B, C>(Fn<B,C>, Fn<A,B>, A) => C) &
    (<A, B>(Fn<A,B>, A) => B)
;

export type MaybePipeWith =
    (<A, B, C, D, E, F, G>(A, Mn<A,B>, Mn<B,C>, Mn<C,D>, Mn<D,E>, Mn<E,F>, Mn<F,G>) => G) &
    (<A, B, C, D, E, F>(A, Mn<A,B>, Mn<B,C>, Mn<C,D>, Mn<D,E>, Mn<E,F>) => F) &
    (<A, B, C, D, E>(A, Mn<A,B>, Mn<B,C>, Mn<C,D>, Mn<D,E>) => E) &
    (<A, B, C, D>(A, Mn<A,B>, Mn<B,C>, Mn<C,D>) => D) &
    (<A, B, C>(A, Mn<A,B>, Mn<B,C>) => C) &
    (<A, B>(A, Mn<A,B>) => B)
;

export type MaybeComposeWith =
    (<A, B, C, D, E, F, G>(Mn<F,G>, Mn<E,F>, Mn<D,E>, Mn<C,D>, Mn<B,C>, Mn<A,B>, A) => G) &
    (<A, B, C, D, E, F>(Mn<E,F>, Mn<D,E>, Mn<C,D>, Mn<B,C>, Mn<A,B>, A) => F) &
    (<A, B, C, D, E>(Mn<D,E>, Mn<C,D>, Mn<B,C>, Mn<A,B>, A) => E) &
    (<A, B, C, D>(Mn<C,D>, Mn<B,C>, Mn<A,B>, A) => D) &
    (<A, B, C>(Mn<B,C>, Mn<A,B>, A) => C) &
    (<A, B>(Mn<A,B>, A) => B)
;

export type AsyncPipeWith =
    (<A, B, C, D, E, F, G>(A, Pn<A,B>, Pn<B,C>, Pn<C,D>, Pn<D,E>, Pn<E,F>, Pn<F,G>) => G) &
    (<A, B, C, D, E, F>(A, Pn<A,B>, Pn<B,C>, Pn<C,D>, Pn<D,E>, Pn<E,F>) => F) &
    (<A, B, C, D, E>(A, Pn<A,B>, Pn<B,C>, Pn<C,D>, Pn<D,E>) => E) &
    (<A, B, C, D>(A, Pn<A,B>, Pn<B,C>, Pn<C,D>) => D) &
    (<A, B, C>(A, Pn<A,B>, Pn<B,C>) => C) &
    (<A, B>(A, Pn<A,B>) => B)
;

export type AsyncComposeWith =
    (<A, B, C, D, E, F, G>(Pn<F,G>, Pn<E,F>, Pn<D,E>, Pn<C,D>, Pn<B,C>, Pn<A,B>, A) => G) &
    (<A, B, C, D, E, F>(Pn<E,F>, Pn<D,E>, Pn<C,D>, Pn<B,C>, Pn<A,B>, A) => F) &
    (<A, B, C, D, E>(Pn<D,E>, Pn<C,D>, Pn<B,C>, Pn<A,B>, A) => E) &
    (<A, B, C, D>(Pn<C,D>, Pn<B,C>, Pn<A,B>, A) => D) &
    (<A, B, C>(Pn<B,C>, Pn<A,B>, A) => C) &
    (<A, B>(Pn<A,B>, A) => B)
;

export type AsyncMaybePipeWith =
    (<A, B, C, D, E, F, G>(A, MP<A,B>, MP<B,C>, MP<C,D>, MP<D,E>, MP<E,F>, MP<F,G>) => G) &
    (<A, B, C, D, E, F>(A, MP<A,B>, MP<B,C>, MP<C,D>, MP<D,E>, MP<E,F>) => F) &
    (<A, B, C, D, E>(A, MP<A,B>, MP<B,C>, MP<C,D>, MP<D,E>) => E) &
    (<A, B, C, D>(A, MP<A,B>, MP<B,C>, MP<C,D>) => D) &
    (<A, B, C>(A, MP<A,B>, MP<B,C>) => C) &
    (<A, B>(A, MP<A,B>) => B)
;

export type AsyncMaybeComposeWith =
    (<A, B, C, D, E, F, G>(MP<F,G>, MP<E,F>, MP<D,E>, MP<C,D>, MP<B,C>, MP<A,B>, A) => G) &
    (<A, B, C, D, E, F>(MP<E,F>, MP<D,E>, MP<C,D>, MP<B,C>, MP<A,B>, A) => F) &
    (<A, B, C, D, E>(MP<D,E>, MP<C,D>, MP<B,C>, MP<A,B>, A) => E) &
    (<A, B, C, D>(MP<C,D>, MP<B,C>, MP<A,B>, A) => D) &
    (<A, B, C>(MP<B,C>, MP<A,B>, A) => C) &
    (<A, B>(MP<A,B>, A) => B)
;

