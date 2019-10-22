
const initialState = {
  electionDistrict: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'MAP_SET_ELECTION_DISTRICT': 
      return {
        ...state,
        electionDistrict: action.data.electionDistrict,
      };
      
    default: 
      return state;
  }
}