import { YMaps, Map, Placemark } from "react-yandex-maps";
import React, { Component } from "react";

export default class YandexMap extends Component {
  render() {
    const mapData = {
      center: [55.054934, 73.249985],
      zoom: 16,
      controls: ["zoomControl", "fullscreenControl"],
    };
    const mapStyle = {
      height: 400,
      marginTop: 20,
    };
    return (
      <YMaps>
        <Map
          defaultState={mapData}
          style={mapStyle}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark geometry={[55.054934, 73.249985]} />
        </Map>
      </YMaps>
    );
  }
}
