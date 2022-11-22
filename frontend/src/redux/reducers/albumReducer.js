import {
  DELETE_MUSIC, GET_ALBUM_MUSICS, GET_FAV_MUSICS, TOKEN_ERROR,
} from '../actions/types.js';

const INITIAL_STATE = {
  album: null,
  musics: null,
  favMusics: null,
  deletedMusic: null,
  authorized: true,
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
    case DELETE_MUSIC: return {
      ...state,
      deletedMusic: action.payload.deletedMusicId,
    };
    case TOKEN_ERROR: return {
      ...state,
      authorized: false,
    };
    default: return state;
  }
}

export default albumReducer;
