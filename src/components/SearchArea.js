import React from 'react';
import SearchResults from './SearchResults';

const SearchArea = (props) => (
  <div id='cmp-search-area'>
    <input 
      type='text' 
      onChange={props.handleSearch} 
      onKeyDown={props.handleNewLine} 
      value={props.searchQuery}
      placeholder="Input your address to see your district"
    />

    <SearchResults {...props} />
  </div>
)

export default SearchArea;