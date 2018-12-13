// @flow
import {singlePipe} from './util/composition';

export default (value: *, ...fns: Array<Function>) => fns.reduce(singlePipe)(value);


