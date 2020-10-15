import React , { Component } from 'react'
import { Map as LeafletMap, TileLayer,  Marker, Popup } from 'react-leaflet';
import './AgrabintaMap.css';
import {markers} from './data';

class Agrabinta extends Component {
  render() {
    return (
      <LeafletMap
        center={[-7.4035555, 106.971347]} // [-7.394266, 106.971347]
        zoom={13} // 13
        minZoom={13}
        maxZoom={18}
        attributionControl={true}
        zoomControl={true}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {markers.map((marker) => (
          <Marker position={marker.position}>
            <Popup>
              {marker.name}
            </Popup>
          </Marker>
        ))}
      </LeafletMap>
    );
  }
}

export default Agrabinta;