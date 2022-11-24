import { getLocalStorageToken } from '../../helpers/localStorage.js';
import api from '../../services/api.js';
import { DELETE_MUSIC, TOKEN_ERROR } from './types.js';

export default function deleteFavMusic({ trackId }) {
  return async (dispatch) => {
    try {
      await api.delete('/fav-musics', {
        data: {
          trackId,
        },
        headers: {
          'authorization': `Bearer ${getLocalStorageToken()}`,
        },
      });
      dispatch({
        type: DELETE_MUSIC,
        payload: {
          deletedMusicId: trackId,
        },
      });
    } catch (err) {
      if (err.response.data.tokenErr) {
        dispatch({
          type: TOKEN_ERROR,
        });
      }
    }
  };
}
