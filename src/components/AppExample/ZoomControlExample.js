import React from 'react';
import { MapContainer as Map, TileLayer, ZoomControl } from 'react-leaflet';

const ZoomControlExample = () => (
  <Map center={[51.505, -0.09]} zoom={13} zoomControl={false}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <ZoomControl position="topright" />
  </Map>
)

export default ZoomControlExample;