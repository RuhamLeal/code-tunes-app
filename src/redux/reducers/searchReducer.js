import GET_ALBUMS from '../actions/types.js';

const INITIAL_STATE = {
  albumData: null,
  albumQuant: 0,
  query: '',
};

function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALBUMS: return {
      ...state,
      albumData: action.payload.data.results,
      albumQuant: action.payload.data.resultCount,
      query: action.payload.query,
    };
    default: return state;
  }
}

export default searchReducer;
