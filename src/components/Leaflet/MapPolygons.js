import React, { Component } from 'react'
import {
  Circle,
  Map,
  Popup,
  TileLayer,
} from 'react-leaflet'

const center = [30.583332, 114.283333]

export default class VectorLayersExample extends Component {
  render() {
    return (
      <Map center={center} scrollWheelZoom={false} zoom={2}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.props.map_data.map(item => {
            return (
              <Circle key={item.county_id} center={item.coordinates} color="red" fillColor="red" radius={Math.log2(item.cases) * 15000}>
                <Popup>
                  <div>
                    {item.county_name}
                  </div>
                  <div>
                    {item.cases}
                  </div>
                  <div>
                    {item.country_name}
                  </div>
                </Popup>
              </Circle>
            )
        })}
      </Map>
    )
  }
}