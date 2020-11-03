import React , { Component } from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import './AgrabintaMap.css';

import MarkerList from './MarkerList';
import GeoJSONList from './GeoJSONList';

class AgrabintaMap extends Component {

  state = {
    center: [-7.3651467,106.8949763],
    currentLocation : []
  }

  handleClick = (e: Object) => {
    this.setState({
      center: [e.latlng.lat, e.latlng.lng],
      // center: this.state.currentLocation
    })
    console.log(`[${e.latlng.lat}, ${e.latlng.lng}]`)
  }
  
  setCurrentLocation = (lat, lng) => {
      this.setState({
        currentLocation: [lat, lng]
      });
  }
  
  render() {
      if (navigator.geolocation) {

        // const coo = navigator.geolocation.getCurrentPosition();

        navigator.geolocation.getCurrentPosition((position) => {
          this.setCurrentLocation(position.coords.latitude, position.coords.longitude)
        });

      } else {
        console.log("Geolocation is not supported by this browser.");
      }

      return (
      <section className="relative">
        <div className="absolute inset-0">
          <LeafletMap
            // center={[-7.408292610286995, 106.98458433151247]}
            // zoom={18} // 12
            center={this.state.center}
            zoom={12} // 12
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

            <MarkerList 
              currentLocation={this.state.currentLocation}
            />

            <GeoJSONList />

          </LeafletMap>
        </div>
      </section>
    );
  }
}

export default AgrabintaMap;