import React , { Component } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import './AgrabintaMap.css';

import MarkerList from './MarkerList';
import GeoJSONList from './GeoJSONList';

const agrabintaLocation = [-7.3651467,106.8949763];

class AgrabintaMap extends Component {

  state = {
    center: agrabintaLocation,
    yourLocation : []
  }

  setCenter = (latlngArray) => {
    // alert(latlngArray);
    this.setState({
      center: latlngArray
    });
  }

  handleClick = (e) => {
    alert(432884230)
    this.setState({
      center: [e.latlng.lat, e.latlng.lng],
      // center: this.state.yourLocation
    })
    console.log(`[${e.latlng.lat}, ${e.latlng.lng}]`)
  }
  
  setYourLocation = (lat, lng) => {
      this.setState({
        yourLocation: [lat, lng]
      });
  }
  
  render() {
      if (navigator.geolocation) {

        // const coo = navigator.geolocation.getCurrentPosition();

        navigator.geolocation.getCurrentPosition((position) => {
          this.setYourLocation(position.coords.latitude, position.coords.longitude)
        });

      } else {
        console.log("Geolocation is not supported by this browser.");
      }

      return (
      <section className="relative">
        <div className="absolute bottom-0 right-0 mb-5 mr-3" style={{zIndex: 1001}}>
          <button onClick={() => this.setCenter(agrabintaLocation)} className="p-2 mr-2 text-sm text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none">Go to your location</button>
          <button onClick={() => this.setCenter(agrabintaLocation)} className="p-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none">Go to Agrabinta</button>
        </div>
        <div className="relative">
          <MapContainer
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
              currentLocation={this.state.yourLocation}
            />

            <GeoJSONList />

          </MapContainer>
        </div>
      </section>
    );
  }
}

export default AgrabintaMap;