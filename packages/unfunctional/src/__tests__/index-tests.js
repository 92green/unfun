// @flow
import {pipe} from '../index';
import {compose} from '../index';
import {asyncPipe} from '../index';
import {asyncCompose} from '../index';
import {maybePipe} from '../index';
import {maybeCompose} from '../index';
import {asyncMaybePipe} from '../index';
import {asyncMaybeCompose} from '../index';

import {pipeWith} from '../index';
import {composeWith} from '../index';
import {maybePipeWith} from '../index';
import {maybeComposeWith} from '../index';
import {asyncPipeWith} from '../index';
import {asyncComposeWith} from '../index';
import {asyncMaybePipeWith} from '../index';
import {asyncMaybeComposeWith} from '../index';

describe('exports', () => {

    test.each([
        ['pipe', pipe],
        ['compose', compose],
        ['asyncPipe', asyncPipe],
        ['asyncCompose', asyncCompose],
        ['maybePipe', maybePipe],
        ['maybeCompose', maybeCompose],
        ['asyncMaybePipe', asyncMaybePipe],
        ['asyncMaybeCompose', asyncMaybeCompose],
        ['pipeWith', pipeWith],
        ['composeWith', composeWith],
        ['asyncPipeWith', asyncPipeWith],
        ['asyncComposeWith', asyncComposeWith],
        ['maybePipeWith', maybePipeWith],
        ['maybeComposeWith', maybeComposeWith],
        ['asyncMaybePipeWith', asyncMaybePipeWith],
        ['asyncMaybeComposeWith', asyncMaybeComposeWith]
    ])(
        `import {%s} from 'unfunctional'`,
        (name, module) => {
            expect(typeof module).toBe('function');
        }
    );

});

