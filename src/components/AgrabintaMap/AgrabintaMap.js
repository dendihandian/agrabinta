import React , { Component } from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import './AgrabintaMap.css';

import MarkerList from './MarkerList';
import GeoJSONList from './GeoJSONList';

class AgrabintaMap extends Component {

  // state = {
  //   latlng: {
  //     lat: -7.3651467,
  //     lng: 106.8949763,
  //   },
  // }

  handleClick = (e: Object) => {
    // this.setState({
    //   latlng: e.latlng,
    // })
    console.log(`[${e.latlng.lat}, ${e.latlng.lng}]`)
  }
  
  render() {
    return (
      <LeafletMap
        // center={[-7.3651467,106.8949763]}
        center={[-7.408292610286995, 106.98458433151247]}
        // zoom={12} // 12
        zoom={18} // 12
        minZoom={12}
        maxZoom={18}
        attributionControl={true}
        zoomControl={true}
        onclick={this.handleClick}
      >
        <TileLayer
          // url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'

          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | Markers Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerList />

        <GeoJSONList />

      </LeafletMap>
    );
  }
}

export default AgrabintaMap;