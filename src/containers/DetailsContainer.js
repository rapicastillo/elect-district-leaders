import React from 'react';
import Geocode from "react-geocode";
import _ from 'lodash';
import { connect } from 'react-redux';

import Details from '../components/Details';
import { 
  setSearchSuggestions,
  setCoordinates,
} from '../actions/map';

Geocode.setApiKey("AIzaSyBnjEE82n1vdlw8jiszNs_tJgX5YHR_hTk");
Geocode.enableDebug();

class DetailsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchQuery: null,
      timeout: null,
    }
  }

  handleNewLine = (e) => {
    if (e.key === 'Enter' && this.props.searchResults.length > 0) {
      const item = this.props.searchResults[0];

      this.setState({searchQuery: item.formatted_address });
      this.handleAddressPick(
        _.get(item, 'geometry.location.lat'), 
        _.get(item, 'geometry.location.lng'),
      );

      
    }
  }

  handleSearch = (e) => {

    this.setState({
      searchQuery: e.target.value
    }, () => {

      clearTimeout(this.state.timeout);
      if (this.state.searchQuery.length > 4) {
        this.setState({
          timeout: setTimeout(
            ()=> {
              this.search(this.state.searchQuery)
            }, 300)
        });
      }
    });
  }

  search = (searchQuery) => {
    Geocode.fromAddress(searchQuery).then(
      response => {
        this.props.setSearchSuggestions(response.results);
      },
      error => {
        console.error(error);
      }
    );
  }

  handleAddressPick = (lat, lng) => {
    // this.props.setCoordinates(null);
    this.props.setCoordinates({lat, lng});
    this.props.setSearchSuggestions([]);
  }

  render = () => (
    <Details 
      {...this.props}
      handleAddressPick={this.handleAddressPick}
      handleNewLine={this.handleNewLine}
      handleSearch={this.handleSearch}
      searchQuery={this.state.searchQuery}
    />
  )
}

const mapStateToProps = (state) => ({
  searchResults: _.get(state.map, 'searchResults'),
});

export default connect(mapStateToProps, 
  { setSearchSuggestions, setCoordinates })(DetailsContainer);