
const initialState = {
  electionDistrict: null,
  searchResults: [],
  coordinates: null,
  assemblyDistrict: null,
  electionPrecinct: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'MAP_SET_ELECTION_DISTRICT': 
      console.log("ENTERED HERE ... ", action.data);
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
    default: 
      return state;
  }
}