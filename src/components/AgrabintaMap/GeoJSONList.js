import React, {Fragment} from 'react';
import { GeoJSON } from 'react-leaflet';

import { geojson } from '../../data/geojson';

const GeoJSONList = () => {
    return (
        <Fragment>
            {geojson.map((gj, i) => {
                return (
                    <GeoJSON key={i} data={gj} stroke={true} style={{color: 'gray'}}/>
                )
            })}
        </Fragment>
    )
}

export default GeoJSONList;
