import React from 'react';
import DetailsContainer from './DetailsContainer';
import MapContainer from './MapContainer';

const NewReformers = (props) => (
  <div id='cnt-new-reformers'>
    <div className='cnt-nf-details'>
      <DetailsContainer {...props} />
    </div>
    <div className='cnt-nf-map'>
      <MapContainer {...props} />
    </div>
  </div>
);

export default NewReformers;