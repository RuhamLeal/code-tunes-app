import { getLocalStorageUserId } from '../../helpers/localStorage.js';
import api from '../../services/api.js';

export default function addFavMusic({ previewUrl, trackName }) {
  const userId = getLocalStorageUserId();

  return async () => {
    try {
      await api.post('/fav-musics', {
        userId,
        audioUrl: previewUrl,
        musicName: trackName,
      });
    } catch (err) {
      global.alert('Erro ao favoritar música, tente novamente');
      console.log(err.response.data.message);
    }
  };
}
