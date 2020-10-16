import {concat} from 'lodash';
import {villages} from './villages';
import {districts} from './districts';

export const geojson = concat(
    districts,
    villages,
);