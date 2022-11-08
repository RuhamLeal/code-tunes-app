import { getLocalStorageUserId } from '../../helpers/localStorage.js';
import api from '../../services/api.js';

export default function deleteFavMusic({ trackId }) {
  const userId = getLocalStorageUserId();

  return async () => {
    try {
      await api.delete('/fav-musics', {
        data: {
          userId,
          trackId,
        },
      });
    } catch (err) {
      global.alert('Erro ao deletar música, tente novamente');
      console.log(err.response.data.message);
    }
  };
}
