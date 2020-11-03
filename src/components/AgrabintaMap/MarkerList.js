import React, { Fragment } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { markers } from '../../data/markers';

import PlaceholderIcon from '../LeafletIcons/PlaceholderIcon';
import MosqueIcon from '../LeafletIcons/MosqueIcon';
import BeachIcon from '../LeafletIcons/BeachIcon';
import SchoolIcon from '../LeafletIcons/SchoolIcon';
import StoreIcon from '../LeafletIcons/StoreIcon';
import PoliceStationIcon from '../LeafletIcons/PoliceStationIcon';
import GovernmentBuildingIcon from '../LeafletIcons/GovernmentBuildingIcon';
import FactoryIcon from '../LeafletIcons/FactoryIcon';
import SoccerFieldIcon from '../LeafletIcons/SoccerFieldIcon';
import BankIcon from '../LeafletIcons/BankIcon';
import KindergartenIcon from '../LeafletIcons/KindergartenIcon';
import GasStationIcon from '../LeafletIcons/GasStationIcon';


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

        case 'government-building':
            icon = GovernmentBuildingIcon;
            break;

        case 'factory':
            icon = FactoryIcon;
            break;

        case 'soccer-field':
            icon = SoccerFieldIcon;
            break;

        case 'kindergarten':
            icon = KindergartenIcon;
            break;

        case 'bank':
            icon = BankIcon;
            break;

        case 'gas-station':
            icon = GasStationIcon;
            break;

        default:
            icon = PlaceholderIcon;
            break;
    }
    return icon;
}

const MarkerList = (props) => {

    let currentLocationMarker = null;
    if (props.currentLocation.length) {
        currentLocationMarker = <Marker position={props.currentLocation}>
            <Popup>You are here</Popup>
        </Marker>;
    }

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

            {currentLocationMarker}

        </Fragment>
    )
}

export default MarkerList;
