// @flow
import {_pipe} from './util/primitive';
import {_compose} from './util/primitive';
import {_maybePipe} from './util/primitive';
import {_maybeCompose} from './util/primitive';
import {_asyncPipe} from './util/primitive';
import {_asyncCompose} from './util/primitive';
import {_asyncMaybePipe} from './util/primitive';
import {_asyncMaybeCompose} from './util/primitive';
import {_multi} from './util/primitive';
import {_multiWith} from './util/primitive';

export const pipe: $ComposeReverse = _multi(_pipe);
export const compose: $Compose = _multi(_compose);
export const maybePipe = _multi(_maybePipe);
export const maybeCompose = _multi(_maybeCompose);
export const asyncPipe = _multi(_asyncPipe);
export const asyncCompose = _multi(_asyncCompose);
export const asyncMaybePipe = _multi(_asyncMaybePipe);
export const asyncMaybeCompose = _multi(_asyncMaybeCompose);

export const pipeWith = _multiWith(pipe);
export const composeWith = _multiWith(compose);
export const maybePipeWith = _multiWith(maybePipe);
export const maybeComposeWith = _multiWith(maybeCompose);
export const asyncPipeWith = _multiWith(asyncPipe);
export const asyncComposeWith = _multiWith(asyncCompose);
export const asyncMaybePipeWith = _multiWith(asyncMaybePipe);
export const asyncMaybeComposeWith = _multiWith(asyncMaybeCompose);

