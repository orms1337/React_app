import { YMaps, Map, Placemark } from "react-yandex-maps";
import React, { Component } from "react";

export default class YandexMap extends Component {
  render() {
    const mapData = {
      center: [55.054934, 73.249985],
      zoom: 16,
    };
    const mapStyle = {
      //height: 100,
      //width: 100,
      minHeight: 200,
      maxWidth: 1000,
      marginTop: 20,
    };
    return (
      <YMaps>
        <Map
          defaultState={mapData}
          style={{
            height: 400,
            margin: 20,
          }}
        >
          <Placemark geometry={[55.054934, 73.249985]} />
        </Map>
      </YMaps>
    );
  }
}
