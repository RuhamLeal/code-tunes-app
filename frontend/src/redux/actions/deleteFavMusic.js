import { getLocalStorageToken } from '../../helpers/localStorage.js';
import api from '../../services/api.js';
import { DELETE_MUSIC } from './types.js';

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
      console.log(err.response.data.message);
    }
  };
}
