// @flow
import {singleAsyncCompose} from './util/composition';

export default (...args: Array<*>) => {
    const item = args.pop();
    return args.reduce(singleAsyncCompose)(item);
};

