import React, { Fragment } from 'react';
import { Polygon } from 'react-leaflet';

import { districts } from '../../data/geojson/districts';

// NOTE: PolygonList not working with huge amount of coordinates

const PolygonList = () => {

    return (
        <Fragment>
            {districts.map((district, i) => {
                return (
                    <Polygon key={i} color="purple" 
                    // positions={district.features[0].geometry.coordinates[0]}/>
                    positions={coo}/>
                )
            })}
        </Fragment>
    )
}

export default PolygonList;
