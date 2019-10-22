import React from 'react';
import DetailsContainer from './DetailsContainer';
import MapContainer from './MapContainer';

const NewReformers = (props) => (
  <div id='cnt-new-reformers'>
    <div className='cnt-nf-map'>
      <DetailsContainer {...props} />
      <MapContainer {...props} />
    </div>
  </div>
);

export default NewReformers;