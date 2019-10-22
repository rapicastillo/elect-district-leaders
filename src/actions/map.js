
export const setElectionDistrict = (electionDistrict) => ({
  type: 'MAP_SET_ELECTION_DISTRICT',
  data: { electionDistrict }
});

export const setSearchSuggestions = (searchResults) => ({
  type: 'MAP_SET_SEARCH_SUGGESTIONS', 
  data: { searchResults }
})

export const setCoordinates = (coordinates) => ({
  type: 'MAP_SET_COORDINATES', 
  data: { coordinates }
})