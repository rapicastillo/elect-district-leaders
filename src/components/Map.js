import React from 'react';
import ReactDOMServer from 'react-dom/server';
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

    this.state = {
      showPopup: false,
    }
  }
  componentDidMount = () => {
    this.map = apply('cmp-map', 'https://api.mapbox.com/styles/v1/rcscastillo/ck1zv7h6e19vw1cqo8g684i9p?access_token=' + key);

    this.map.getView().fit(QUEENS_EXTENT);

    
    this.popup = new Overlay({
      element: document.getElementById('cmp-popup'),
      autoPan: true, 
    });
    this.map.addOverlay(this.popup);

    this.map.on('singleclick', (e) => {
      const features = this.map.getFeaturesAtPixel(e.pixel);
      console.log(features);
      if (features.length > 0) {
        this.props.setElectionDistrict(features[0].get('elect_dist'));
        this.props.setPart(features[0].get('ADED-inf_1'));
        this.setState({ showPopup: true });
        this.popup.setPosition(this.map.getCoordinateFromPixel(e.pixel));
      }
    });

  }

  componentDidUpdate = (prevProps) => {
    if(
      !_.isEqual(prevProps.coordinates, this.props.coordinates)
      && this.props.coordinates !== null
    ) {
      this.focusMap();
    } 
  }

  focusMap = () => {
    const { lat, lng } = _.get(this.props, 'coordinates');

    const coords = transform([lng, lat], 'EPSG:4326', 'EPSG:3857');
    
    this.map.getView().setZoom(12);
    setTimeout(()=>{
      this.map.getView().setCenter(coords);  
    }, 200);


    setTimeout(()=> {
      const pixel = this.map.getPixelFromCoordinate(coords);
      const features = this.map.getFeaturesAtPixel(pixel);

      console.log(features);
      if (features.length > 0) {
        this.props.setElectionDistrict(features[1].get('elect_dist'));
        this.props.setPart(features[1].get('ADED-inf_1'));
        this.setState({ showPopup: true });
      }
    }, 200)
    
    
    this.popup.setPosition(coords);

    // setTimeout(()=>{
    //   content.innerHTML = ReactDOMServer.renderToString(this.buildContent());
    // }, 300);
  }

  buildContent = () => (
    <>
      <h4>Your Election District is <span>{_.get(this.props, 'electionDistrict')}</span></h4>
      <p>Assembly District # {_.get(this.props, 'assemblyDistrict')}</p>
      <p>Precinct # {_.get(this.props, 'electionPrecinct')}</p>
      <p>Part {_.get(this.props, 'part')}</p>
    </>
  )
  

  render = () => (
    <>
      <div id='cmp-map'/>
      <div id='cmp-popup' style={{ display: this.state.showPopup ? 'block' : 'none' }}>
        <a 
          href="#" 
          className="cmp-popup-closer"
          onClick={()=>{ this.setState({ showPopup: false }); }}
        ></a>
        <div id='cmp-content'>
          {this.buildContent()}
        </div>
      </div>
    </>
  )
}

export default MapView;