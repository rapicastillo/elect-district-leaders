import React from 'react';
import _ from 'lodash';

import Map from '../components/Map';
import { connect } from 'react-redux';
import { setElectionDistrict, setCoordinates } from '../actions/map';
class MapContainer extends React.Component {

  render = () => (
    <Map {...this.props} />
  )
}

const mapStateToProps = (state) => ({
  coordinates: _.get(state, 'map.coordinates')
});

export default connect(
  mapStateToProps, {
    setElectionDistrict,
    setCoordinates,
  })(MapContainer);