import api from '../../services/api.js';
import { GET_ALBUMS } from './types.js';

export default function getAlbums(query) {
  const queryFormatted = encodeURI(query).replaceAll('%20', '+');

  return async (dispatch) => {
    try {
      const data = await api.get(`/albums/${queryFormatted}`);
      dispatch({
        type: GET_ALBUMS,
        payload: {
          data,
          query,
        },
      });
    } catch (err) {
      global.alert('Erro ao realizar a busca, tente novamente...');
    }
  };
}
