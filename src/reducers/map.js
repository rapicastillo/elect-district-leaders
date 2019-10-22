
const initialState = {
  electionDistrict: null,
  searchResults: [{"address_components":[{"long_name":"104-20","short_name":"104-20","types":["street_number"]},{"long_name":"Queens Boulevard","short_name":"Queens Blvd","types":["route"]},{"long_name":"Forest Hills","short_name":"Forest Hills","types":["neighborhood","political"]},{"long_name":"Queens","short_name":"Queens","types":["political","sublocality","sublocality_level_1"]},{"long_name":"Queens County","short_name":"Queens County","types":["administrative_area_level_2","political"]},{"long_name":"New York","short_name":"NY","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"11375","short_name":"11375","types":["postal_code"]}],"formatted_address":"104-20 Queens Blvd, Forest Hills, NY 11375, USA","geometry":{"location":{"lat":40.7234148,"lng":-73.85006280000002},"location_type":"ROOFTOP","viewport":{"northeast":{"lat":40.7247637802915,"lng":-73.84871381970852},"southwest":{"lat":40.7220658197085,"lng":-73.85141178029153}}},"place_id":"ChIJ-8e5NiRewokRxYmfwTiGwHE","plus_code":{"compound_code":"P4FX+9X Forest Hills, Queens, NY, United States","global_code":"87G8P4FX+9X"},"types":["establishment","point_of_interest"]}],
  coordinates: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'MAP_SET_ELECTION_DISTRICT': 
      return {
        ...state,
        electionDistrict: action.data.electionDistrict,
      };
    
    case 'MAP_SET_SEARCH_SUGGESTIONS':
      return {
        ...state, 
        searchResults: action.data.searchResults,
      }

    case 'MAP_SET_COORDINATES':
      console.log(">>>>", action.data);
      return {
        ...state, 
        coordinates: action.data.coordinates,
      }
    default: 
      return state;
  }
}