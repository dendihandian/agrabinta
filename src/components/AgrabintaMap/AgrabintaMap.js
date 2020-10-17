import React , { Component } from 'react'
import { Map as LeafletMap, TileLayer,  Marker, Popup, GeoJSON } from 'react-leaflet';
import './AgrabintaMap.css';
import { markers } from '../../data/markers';
import { geojson } from '../../data/geojson';

class AgrabintaMap extends Component {
  render() {
    return (
      <LeafletMap
        center={[-7.3651467,106.8949763]}
        zoom={12} // 12
        minZoom={12}
        maxZoom={18}
        attributionControl={true}
        zoomControl={true}
      >
        <TileLayer
          // url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'

          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker, i) => (
          <Marker key={i} position={marker.position}>
            <Popup>
              {marker.name}
            </Popup>
          </Marker>
        ))}

        {geojson.map((gj, i) => (
         <GeoJSON key={i} data={gj}/>
        ))}

      </LeafletMap>
    );
  }
}

export default AgrabintaMap;