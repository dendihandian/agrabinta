import React , { Component } from 'react'
import { Map as LeafletMap, TileLayer, GeoJSON } from 'react-leaflet';
import './AgrabintaMap.css';
import { geojson } from '../../data/geojson';

import MarkerList from './MarkerList';

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

          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | Markers Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerList />

        {geojson.map((gj, i) => (
         <GeoJSON key={i} data={gj} stroke={true} style={{color: 'gray'}}/>
        //  <Polygon key={i} positions={gj.features[0].geometry.coordinates} attribution="-" />
        ))}

      </LeafletMap>
    );
  }
}

export default AgrabintaMap;