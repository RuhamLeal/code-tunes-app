import { getLocalStorageUserId } from '../../helpers/localStorage.js';
import api from '../../services/api.js';

export default function deleteFavMusic({ previewUrl }) {
  const userId = getLocalStorageUserId();

  return async () => {
    try {
      const response = await api.delete('/fav-musics', {
        data: {
          userId,
          audioUrl: previewUrl,
        },
      });
      console.log(response);
    } catch (err) {
      global.alert('Erro ao deletar música, tente novamente');
      console.log(err.response.data.message);
    }
  };
}
