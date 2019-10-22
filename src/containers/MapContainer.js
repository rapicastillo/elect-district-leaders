import React from 'react';
import Map from '../components/Map';
import { connect } from 'react-redux';
import { setElectionDistrict } from '../actions/map';
class MapContainer extends React.Component {

  render = () => (
    <Map />
  )
}

const mapStateToProps = (state) => ({
});

export default connect(
  mapStateToProps, {
    setElectionDistrict,
  })(MapContainer);