import React, { createRef, Component } from 'react'
import { MapContainer as Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class EventsExample extends Component {
  state = {
    hasLocation: false,
    latlng: {
      lat: 51.505,
      lng: -0.09,
    },
  }

  mapRef = createRef()

  handleClick = () => {
    const map = this.mapRef.current
    if (map != null) {
      map.leafletElement.locate()
    }
  }

  handleLocationFound = (e) => {
    console.log(e)
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  render() {
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng}>
        <Popup>You are here</Popup>
      </Marker>
    ) : null

    return (
      <Map
        center={this.state.latlng}
        length={4}
        onClick={this.handleClick}
        onLocationfound={this.handleLocationFound}
        ref={this.mapRef}
        zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
      </Map>
    )
  }
}