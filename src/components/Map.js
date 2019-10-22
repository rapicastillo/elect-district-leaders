import React from 'react';
import _ from 'lodash';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';

import { transform } from 'ol/proj';
import {apply} from 'ol-mapbox-style';

import './Map.css';


const key = 'pk.eyJ1IjoicmNzY2FzdGlsbG8iLCJhIjoiY2pseDZ2bmp0MDcwYzNwcGp1bjBqNHo4aSJ9.3bD8gQrMAIEqV6yyS-__vg';
class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.map = null;
  }
  componentDidMount = () => {
    this.map = apply('cmp-map', 'https://api.mapbox.com/styles/v1/rcscastillo/ck1zv7h6e19vw1cqo8g684i9p?access_token=' + key);
  }

  componentDidUpdate = (prevProps) => {
    console.log(prevProps.coordinates, this.props.coordinates)
    if(prevProps.coordinates === null && this.props.coordinates !== null) {
      this.focusMap();
    }
  }

  focusMap = () => {
    const { lat, lng } = _.get(this.props, 'coordinates');
    console.log( this.map, lat, lng );
    this.map.getView().setCenter(transform([lng, lat], 'EPSG:4326', 'EPSG:3857'));
    this.map.getView().setZoom(15);
  }

  render = () => (
    <div id='cmp-map'/>
  )
}

export default MapView;