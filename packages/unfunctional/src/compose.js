// @flow
import {singleCompose} from './util/composition';

export default (...fns: Array<Function>) => fns.reduce(singleCompose);

