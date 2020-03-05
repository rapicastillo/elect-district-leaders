import electionDistricts from '../assets/data/edad.json';

const initialState = {
  electionDistrict: null,
  searchResults: [],
  coordinates: null,
  assemblyDistrict: null,
  electionPrecinct: null,
  districtMapping: electionDistricts,
  part: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'MAP_SET_ELECTION_DISTRICT': 
      return {
        ...state,
        electionDistrict: action.data.electionDistrict,
        assemblyDistrict: action.data.assemblyDistrict,
        electionPrecinct: action.data.electionPrecinct,
      };
    
    case 'MAP_SET_SEARCH_SUGGESTIONS':
      return {
        ...state, 
        searchResults: action.data.searchResults,
      }

    case 'MAP_SET_COORDINATES':
      return {
        ...state, 
        coordinates: action.data.coordinates,
      }
    case 'MAP_SET_PART':
      return {
        ...state, 
        part: action.data,
      }
    default: 
      return state;
  }
}