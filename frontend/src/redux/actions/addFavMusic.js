import { getLocalStorageToken } from '../../helpers/localStorage.js';
import api from '../../services/api.js';
import { TOKEN_ERROR } from './types.js';

export default function addFavMusic({
  previewUrl, trackName, trackId, collectionId, artistName, collectionName,
}) {
  return async (dispatch) => {
    try {
      await api.post('/fav-musics', {
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
      if (err.response.data.tokenErr) {
        dispatch({
          type: TOKEN_ERROR,
        });
      }
    }
  };
}
