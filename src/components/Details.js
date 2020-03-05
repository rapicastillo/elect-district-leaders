import React from 'react';
import SearchArea from './SearchArea';

import './Details.css';

const Details = (props) => (
  <div id='cmp-details'>
    <h5>Search<br/>Blue = Part A<br/>Red = Part B</h5>
    <SearchArea {...props} />
  </div>
)

export default Details;