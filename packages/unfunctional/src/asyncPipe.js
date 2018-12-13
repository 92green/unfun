// @flow
import {singleAsyncPipe} from './util/composition';

export default (...fns: Array<Function>) => fns.reduce(singleAsyncPipe);

