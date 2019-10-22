
export const setElectionDistrict = (electionDistrict) => {

  return ({
  type: 'MAP_SET_ELECTION_DISTRICT',
  data: { 
    electionDistrict,
    assemblyDistrict: String(electionDistrict).substring(0, 2),
    electionPrecinct: String(electionDistrict).substring(2), 
  }
})
};

export const setSearchSuggestions = (searchResults) => ({
  type: 'MAP_SET_SEARCH_SUGGESTIONS', 
  data: { searchResults }
});

export const setCoordinates = (coordinates) => ({
  type: 'MAP_SET_COORDINATES', 
  data: { coordinates }
});