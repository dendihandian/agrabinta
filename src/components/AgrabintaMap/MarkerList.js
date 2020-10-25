import React, { Fragment } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { markers } from '../../data/markers';

import PlaceholderIcon from '../LeafletIcons/PlaceholderIcon';
import MosqueIcon from '../LeafletIcons/MosqueIcon';
import BeachIcon from '../LeafletIcons/BeachIcon';
import SchoolIcon from '../LeafletIcons/SchoolIcon';
import StoreIcon from '../LeafletIcons/StoreIcon';
import PoliceStationIcon from '../LeafletIcons/PoliceStationIcon';

const iconSwitch = (iconName) => {
    let icon = null;
    switch (iconName) {
        case 'mosque':
            icon = MosqueIcon;
            break;

        case 'school':
            icon = SchoolIcon;
            break;

        case 'beach':
            icon = BeachIcon;
            break;

        case 'store':
            icon = StoreIcon;
            break;

        case 'police-station':
            icon = PoliceStationIcon;
            break;

        default:
            icon = PlaceholderIcon;
            break;
    }
    return icon;
}

const MarkerList = () => {
    return (
        <Fragment>
            {markers.map((marker, i) => {
                return (
                    <Marker key={i} position={marker.position} icon={iconSwitch(marker.icon ?? '')}>
                        <Popup>
                            {marker.name}
                        </Popup>
                    </Marker>
                )
            })}
        </Fragment>
    )
}

export default MarkerList;
