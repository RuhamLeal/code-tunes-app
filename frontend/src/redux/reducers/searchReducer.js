import { GET_ALBUMS, TOKEN_ERROR } from '../actions/types.js';

const INITIAL_STATE = {
  albumData: null,
  albumQuant: 0,
  query: '',
  authorized: true,
};

function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALBUMS: return {
      ...state,
      albumData: action.payload.data.results,
      albumQuant: action.payload.data.resultCount,
      query: action.payload.query,
    };
    case TOKEN_ERROR: return {
      ...state,
      authorized: false,
    };
    default: return state;
  }
}

export default searchReducer;
