import React from 'react';
import _ from 'lodash';

import Map from '../components/Map';
import { connect } from 'react-redux';
import { 
  setElectionDistrict, 
  setCoordinates,
  setPart,
} from '../actions/map';
class MapContainer extends React.Component {

  render = () => (
    <Map {...this.props}>
      {console.log(" -- > this.props.districtMapping ", this.props.districtMapping)}
    </Map>
  )
}

const mapStateToProps = (state) => ({
  coordinates: _.get(state, 'map.coordinates'),
  electionPrecinct: _.get(state, 'map.electionPrecinct'),
  electionDistrict: _.get(state, 'map.electionDistrict'),
  assemblyDistrict: _.get(state, 'map.assemblyDistrict'),
  districtMapping: _.get(state, 'map.districtMapping'),
  part: _.get(state, 'map.part'),
});

export default connect(
  mapStateToProps, {
    setElectionDistrict,
    setCoordinates,
    setPart,
  })(MapContainer);