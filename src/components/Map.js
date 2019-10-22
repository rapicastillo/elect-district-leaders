import React from 'react';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import MVT from 'ol/format/MVT';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
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

  render = () => (
    <div id='cmp-map' />
  )
}

export default MapView;