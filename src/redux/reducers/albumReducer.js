import { GET_ALBUM_MUSICS } from '../actions/types.js';

const INITIAL_STATE = {
  album: null,
  musics: null,
};

function albumReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALBUM_MUSICS: return {
      ...state,
      album: action.payload.album,
      musics: action.payload.musics,
    };
    default: return state;
  }
}

export default albumReducer;
