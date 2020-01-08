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
import {_multiEndWith} from './util/primitive';

import type {Pipe} from './compositionTypes';
import type {Compose} from './compositionTypes';
import type {MaybePipe} from './compositionTypes';
import type {MaybeCompose} from './compositionTypes';
import type {AsyncPipe} from './compositionTypes';
import type {AsyncCompose} from './compositionTypes';
import type {AsyncMaybePipe} from './compositionTypes';
import type {AsyncMaybeCompose} from './compositionTypes';
import type {PipeWith} from './compositionTypes';
import type {ComposeWith} from './compositionTypes';
import type {MaybePipeWith} from './compositionTypes';
import type {MaybeComposeWith} from './compositionTypes';
import type {AsyncPipeWith} from './compositionTypes';
import type {AsyncComposeWith} from './compositionTypes';
import type {AsyncMaybePipeWith} from './compositionTypes';
import type {AsyncMaybeComposeWith} from './compositionTypes';


export const pipe: Pipe = _multi(_pipe);
export const compose: Compose= _multi(_compose);
export const maybePipe: MaybePipe  = _multi(_maybePipe);
export const maybeCompose: MaybeCompose = _multi(_maybeCompose);
export const asyncPipe: AsyncPipe = _multi(_asyncPipe);
export const asyncCompose: AsyncCompose = _multi(_asyncCompose);
export const asyncMaybePipe: AsyncMaybePipe = _multi(_asyncMaybePipe);
export const asyncMaybeCompose: AsyncMaybeCompose = _multi(_asyncMaybeCompose);

export const pipeWith: PipeWith = _multiWith(_pipe);
export const composeWith: ComposeWith = _multiEndWith(_compose);
export const maybePipeWith: MaybePipeWith = _multiWith(_maybePipe);
export const maybeComposeWith: MaybeComposeWith = _multiEndWith(_maybeCompose);
export const asyncPipeWith: AsyncPipeWith = _multiWith(_asyncPipe);
export const asyncComposeWith: AsyncComposeWith = _multiEndWith(_asyncCompose);
export const asyncMaybePipeWith: AsyncMaybePipeWith = _multiWith(_asyncMaybePipe);
export const asyncMaybeComposeWith: AsyncMaybeComposeWith = _multiEndWith(_asyncMaybeCompose);

