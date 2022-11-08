import { getLocalStorageUserId } from '../../helpers/localStorage.js';
import api from '../../services/api.js';

export default function addFavMusic({ previewUrl, trackName, trackId }) {
  const userId = getLocalStorageUserId();

  return async () => {
    try {
      await api.post('/fav-musics', {
        userId,
        trackId,
        audioUrl: previewUrl,
        musicName: trackName,
      });
    } catch (err) {
      global.alert('Erro ao favoritar música, tente novamente');
      console.log(err.response.data.message);
    }
  };
}
