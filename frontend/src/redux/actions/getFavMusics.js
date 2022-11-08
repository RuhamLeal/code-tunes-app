import { getLocalStorageUserId } from '../../helpers/localStorage.js';
import api from '../../services/api.js';
import { GET_FAV_MUSICS } from './types.js';

export default function getFavMusics() {
  const userId = getLocalStorageUserId();

  return async (dispatch) => {
    try {
      const response = await api.get(`/fav-musics/${userId}`);
      dispatch({
        type: GET_FAV_MUSICS,
        payload: {
          favMusics: response.data,
        },
      });
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
}
