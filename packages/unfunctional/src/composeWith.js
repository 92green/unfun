// @flow
import {singleCompose} from './util/composition';

export default (...args: Array<*>) => {
    const item = args.pop();
    return args.reduce(singleCompose)(item);
};

