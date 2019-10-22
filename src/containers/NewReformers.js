import React from 'react';
import DetailsContainer from './DetailsContainer';
import MapContainer from './MapContainer';
import newReformers from '../assets/newReformers.png';

const NewReformers = (props) => (
  <div id='cnt-new-reformers'>
    <header>
      <img src={newReformers} />
      <h3>Election District finder</h3>
    </header>
    <div className='cnt-nf-map'>
      <DetailsContainer {...props} />
      <MapContainer {...props} />
    </div>
  </div>
);

export default NewReformers;