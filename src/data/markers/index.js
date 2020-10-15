import { concat } from 'lodash';
import {schools} from './schools';
import {tourisms} from './tourisms';
import {stores} from './stores';
import {governances} from './governances';

export const markers = concat(
    schools,
    tourisms,
    stores,
    governances,
);