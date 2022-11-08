import { getLocalStorageUserId } from '../../helpers/localStorage.js';
import api from '../../services/api.js';
import { DELETE_MUSIC } from './types.js';

export default function deleteFavMusic({ trackId }) {
  const userId = getLocalStorageUserId();

  return async (dispatch) => {
    try {
      await api.delete('/fav-musics', {
        data: {
          userId,
          trackId,
        },
      });
      dispatch({
        type: DELETE_MUSIC,
        payload: {
          deletedMusicId: trackId,
        },
      });
    } catch (err) {
      global.alert('Erro ao deletar música, tente novamente');
      console.log(err.response.data.message);
    }
  };
}
