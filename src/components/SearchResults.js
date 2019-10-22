import React from 'react';
import _ from 'lodash';
const SearchResults = (props) => (
  <div className='cmp-searchResults'>
    <ul>
      {
        _.get(props, 'searchResults', []).map(item => (
          <li key={item.place_id}>
            <button 
              type="button" 
              onClick={()=>{
                props.handleAddressPick(
                  _.get(item, 'geometry.location.lat'), 
                  _.get(item, 'geometry.location.lng'),
                )
              }}
            >
              <span>{item.formatted_address}</span>
            </button>
            
          </li>
        ))
      }
    </ul>
  </div>
);

export default SearchResults;