import GET_ALBUMS from '../actions/types.js';

const INITIAL_STATE = {
  albumData: [],
};

function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALBUMS: return {
      ...state,
      albumData: action.payload.data,
    };
    default: return state;
  }
}

export default searchReducer;
