// @flow
import index from '../index';


describe('exports', () => {

    it.only('test', () => {
        expect(index).toBe('foo');
    });


    //test.each([
        //['pipe'],
        //['compose'],
        //['asyncPipe'],
        //['asyncCompose'],
        //['maybePipe'],
        //['maybeCompose'],
        //['asyncMaybePipe'],
        //['asyncMaybeCompose'],
        //['pipeWith'],
        //['composeWith'],
        //['asyncPipeWith'],
        //['asyncComposeWith'],
        //['maybePipeWith'],
        //['maybeComposeWith'],
        //['asyncMaybePipeWith'],
        //['asyncMaybeComposeWith']
    //])(
        //`import {%s} from 'unfunctional'`,
        //(name) => {
            //expect(typeof index[name]).toBe('function');
        //}
    //);

});

