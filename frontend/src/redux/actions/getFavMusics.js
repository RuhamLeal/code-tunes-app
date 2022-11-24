import { getLocalStorageToken } from '../../helpers/localStorage.js';
import api from '../../services/api.js';
import { GET_FAV_MUSICS, TOKEN_ERROR } from './types.js';

export default function getFavMusics() {
  return async (dispatch) => {
    try {
      const response = await api.get('/fav-musics', {
        headers: {
          'authorization': `Bearer ${getLocalStorageToken()}`,
        },
      });
      dispatch({
        type: GET_FAV_MUSICS,
        payload: {
          favMusics: response.data,
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
