// @flow
import {singlePipe} from './util/composition';

export default (...fns: Array<Function>) => fns.reduce(singlePipe);

