import { setLocalStorageUser } from '../../helpers/localStorage.js';
import api from '../../services/api.js';
import { LOG_USER } from './types.js';

export default function logUser(user) {
  const { userName, passWord } = user;
  return async (dispatch) => {
    try {
      const response = await api.post('/login', {
        userName,
        passWord,
      });
      console.log(response);
      setLocalStorageUser(userName, response.data.userId, response.data.token);
      dispatch({
        type: LOG_USER,
        payload: {
          logMessage: 'Usuario logado',
        },
      });
    } catch (err) {
      dispatch({
        type: LOG_USER,
        payload: {
          logMessage: 'Usuario não encontrado ou inexistente',
        },
      });
    }
  };
}
