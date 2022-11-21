import { GET_ALBUM_MUSICS } from './types.js';
import api from '../../services/api.js';

export default function getAlbumMusics(albumId) {
  return async (dispatch) => {
    try {
      const { data } = await api.get(`/musics/${albumId}`);
      const { album, musics } = data;
      dispatch({
        type: GET_ALBUM_MUSICS,
        payload: {
          album,
          musics,
        },
      });
    } catch (err) {
      global.alert('Erro ao consultar o album, tente novamente...');
    }
  };
}
