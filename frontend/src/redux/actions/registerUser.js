import api from '../../services/api.js';
import { REGISTER_USER } from './types.js';

export default function registerUser({
  userName, email, name, passWord,
}) {
  return async (dispatch) => {
    try {
      const response = await api.post('/register', {
        userName,
        name,
        passWord,
        email,
      });
      dispatch({
        type: REGISTER_USER,
        payload: {
          registerMessage: response.data.message,
        },
      });
    } catch (err) {
      if (err.response.data.message) {
        dispatch({
          type: REGISTER_USER,
          payload: {
            registerMessage: err.response.data.message,
          },
        });
      }
    }
  };
}
