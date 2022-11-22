import { getLocalStorageToken } from '../../helpers/localStorage.js';
import api from '../../services/api.js';
import { GET_ALBUMS, TOKEN_ERROR } from './types.js';

export default function getAlbums(query) {
  const queryFormatted = encodeURI(query).replaceAll('%20', '+');

  return async (dispatch) => {
    try {
      const { data } = await api.get(`/albums/${queryFormatted}`, {
        headers: {
          'authorization': `Bearer ${getLocalStorageToken()}`,
        },
      });
      dispatch({
        type: GET_ALBUMS,
        payload: {
          data,
          query,
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
