import React from 'react';
import _ from 'lodash';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import Overlay from 'ol/Overlay';

import { transform,transformExtent } from 'ol/proj';
import {apply} from 'ol-mapbox-style';

import './Map.css';
import { thisExpression } from '@babel/types';

const QUEENS_EXTENT = transformExtent([-73.9225, 40.7958, -73.7463, 40.5890], 'EPSG:4326', 'EPSG:3857');

const key = 'pk.eyJ1IjoicmNzY2FzdGlsbG8iLCJhIjoiY2pseDZ2bmp0MDcwYzNwcGp1bjBqNHo4aSJ9.3bD8gQrMAIEqV6yyS-__vg';
class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.map = null;
    this.popup = null;
  }
  componentDidMount = () => {
    this.map = apply('cmp-map', 'https://api.mapbox.com/styles/v1/rcscastillo/ck1zv7h6e19vw1cqo8g684i9p?access_token=' + key);

    this.popup = new Overlay({
      element: document.getElementById('cmp-popup'),
      autoPan: true, 
    })

    this.map.addOverlay(this.popup);
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.coordinates === null && this.props.coordinates !== null) {
      this.focusMap();
    } else if(prevProps.coordinates !== null && this.props.coordinates === null) {
      this.popup.setPosition(null);
    } else if(!_.isEqual(prevProps.coordinates, this.props.coordinates)) {
      this.focusMap();
    } 
  }

  focusMap = () => {
    const { lat, lng } = _.get(this.props, 'coordinates');

    const coords = transform([lng, lat], 'EPSG:4326', 'EPSG:3857');
    this.map.getView().setZoom(15);
    setTimeout(()=>{
      this.map.getView().setCenter(coords)
    }, 200);

    const pixel = this.map.getPixelFromCoordinate(coords);
    const features = this.map.getFeaturesAtPixel(pixel);

    if (features.length > 0) {
      this.props.setElectionDistrict(features[0].get('ElectDist'));
    }

    this.popup.setPosition(coords);
  }

  

  render = () => (
    <>
      <div id='cmp-map'/>
      <div id='cmp-popup'>
        <a 
          href="#" 
          class="cmp-popup-closer"
          onClick={()=>{ this.props.setCoordinates(null); }}
        ></a>
        <h1>Assembly District # {_.get(this.props, 'assemblyDistrict')}</h1>
        <p>Precinct # {_.get(this.props, 'electionPrecinct')}</p>
        <p>
          We don't know who your District Leader is because 
          the Queens County Democractic Party hasn't updated 
          their website for more than two years.
        </p>
        <p>
          <a 
            href={`https://docs.google.com/forms/d/e/1FAIpQLSfHH76kRaTz3BnWNx-dTaQwWVwx1pvsLQZgu-7UiTZi7f7rUQ/viewform?usp=pp_url&entry.381886217=${_.get(this.props, 'assemblyDistrict')}&entry.1258115460=${_.get(this.props, 'electionPrecinct')}`}
            target='_blank'
            onClick={()=>{ this.props.setCoordinates(null); }}
          >Sign up to be District Leader!</a>
        </p>
      </div>
    </>
  )
}

export default MapView;