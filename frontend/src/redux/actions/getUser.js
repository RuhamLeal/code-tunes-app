import { getLocalStorageUserId } from '../../helpers/localStorage.js';
import api from '../../services/api.js';
import { GET_USER } from './types.js';

export default function getUser() {
  const userId = getLocalStorageUserId();
  return async (dispatch) => {
    try {
      const response = await api.get(`/user/${userId}`);
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
