import { getLocalStorageToken } from '../../helpers/localStorage.js';
import api from '../../services/api.js';
import { GET_USER } from './types.js';

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
      console.log(err.response.data.message);
    }
  };
}
