import { getLocalStorageToken } from '../../helpers/localStorage.js';
import api from '../../services/api.js';
import { GET_USER, TOKEN_ERROR } from './types.js';

export default function getUser() {
  return async (dispatch) => {
    try {
      const response = await api.get('/user', {
        headers: {
          'authorization': `Bearer ${getLocalStorageToken()}`,
        },
      });
      dispatch({
        type: GET_USER,
        payload: {
          userData: response.data,
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
