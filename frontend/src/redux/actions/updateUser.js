import { getLocalStorageToken } from '../../helpers/localStorage.js';
import api from '../../services/api.js';
import { UPDATE_USER } from './types.js';

export default function updateUser(updatedUser) {
  return async (dispatch) => {
    try {
      const response = await api.put('/user', updatedUser, {
        headers: {
          'authorization': `Bearer ${getLocalStorageToken()}`,
        },
      });
      dispatch({
        type: UPDATE_USER,
        payload: {
          editResponse: response.data.message,
        },
      });
    } catch (err) {
      dispatch({
        type: UPDATE_USER,
        payload: {
          editResponse: err.response.data.message,
        },
      });
    }
  };
}
