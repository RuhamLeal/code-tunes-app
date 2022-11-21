import { getLocalStorageToken, getLocalStorageUserId } from '../../helpers/localStorage.js';
import api from '../../services/api.js';

export default function addFavMusic({
  previewUrl, trackName, trackId, collectionId, artistName, collectionName,
}) {
  const userId = getLocalStorageUserId();

  return async () => {
    try {
      await api.post('/fav-musics', {
        userId,
        trackId,
        audioUrl: previewUrl,
        musicName: trackName,
        artistName,
        albumName: collectionName,
        albumId: collectionId,
      }, {
        headers: {
          'authorization': `Bearer ${getLocalStorageToken()}`,
        },
      });
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
}
