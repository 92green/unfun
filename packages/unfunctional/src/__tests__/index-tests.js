// @flow
import * as index from '../index';

describe('exports', () => {

    test.each([
        ['pipe'],
        ['compose'],
        ['asyncPipe'],
        ['asyncCompose'],
        ['maybePipe'],
        ['maybeCompose'],
        ['asyncMaybePipe'],
        ['asyncMaybeCompose'],
        ['pipeWith'],
        ['composeWith'],
        ['asyncPipeWith'],
        ['asyncComposeWith'],
        ['maybePipeWith'],
        ['maybeComposeWith'],
        ['asyncMaybePipeWith'],
        ['asyncMaybeComposeWith']
    ])(
        `import {%s} from 'unfunctional'`,
        (name) => {
            expect(typeof index[name]).toBe('function');
        }
    );

});

