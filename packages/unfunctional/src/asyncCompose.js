// @flow
import {singleAsyncCompose} from './util/composition';

export default (...fns: Array<Function>) => fns.reduce(singleAsyncCompose);

