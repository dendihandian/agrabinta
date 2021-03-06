// @flow

import React, { Component } from 'react'
import { MapContainer as Map, TileLayer, VideoOverlay } from 'react-leaflet'

export default class VideoOverlayExample extends Component<
  {},
  { play: boolean },
> {
  state = {
    play: true,
  }

  onTogglePlay = () => {
    this.setState({ play: !this.state.play })
  }

  render() {
    return (
      <Map center={[25, -100]} onClick={this.onTogglePlay} zoom={4}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <VideoOverlay
          bounds={[
            [32, -130],
            [13, -100],
          ]}
          play={this.state.play}
          url="https://www.mapbox.com/bites/00188/patricia_nasa.webm"
        />
      </Map>
    )
  }
}