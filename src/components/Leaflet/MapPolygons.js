import React, { Component } from 'react';
import styled from "styled-components";
import {
  Circle,
  Map,
  Popup,
  TileLayer,
} from 'react-leaflet';

const center = [30.583332, 114.283333]

const TooltipTitle = styled.div`
  font-weight: 600;
  padding: 5px;
`
export default class VectorLayersExample extends Component {
  render() {
    return (
      <Map center={center} scrollWheelZoom={false} zoom={2}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.props.map_data.reduce((all, item) => {
          if (!item.coordinates || item.coordinates.length === 0) {
            return all;
          }
          console.log(item.coordinates)
          all.push (
            <Circle key={item.county_id} center={item.coordinates} color="red" fillColor="red" radius={Math.log2(item.cases) * 15000}>
              <Popup>
                <TooltipTitle>
                  {item.county_name} - {item.country_name}
                </TooltipTitle>
                <div>
                  Infected: {item.cases}
                </div>
                <div>
                  Serious: {item.serious}
                </div>
                <div>
                  Critical: {item.critical}
                </div>
                <div>
                  Dead: {item.deaths}
                </div>
                <div>
                  Recovered: {item.recovered}
                </div>
              </Popup>
            </Circle>
          )
          return all;
        },[])}
      </Map>
    )
  }
}