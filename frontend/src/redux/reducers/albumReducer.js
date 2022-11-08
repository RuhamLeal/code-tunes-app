import { GET_ALBUM_MUSICS, GET_FAV_MUSICS } from '../actions/types.js';

const INITIAL_STATE = {
  album: null,
  musics: null,
  favMusics: null,
};

function albumReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALBUM_MUSICS: return {
      ...state,
      album: action.payload.album,
      musics: action.payload.musics,
    };
    case GET_FAV_MUSICS: return {
      ...state,
      favMusics: action.payload.favMusics,
    };
    default: return state;
  }
}

export default albumReducer;
