import GET_USERNAME from './types.js';

export default function getUsername(username) {
  return {
    type: GET_USERNAME,
    payload: {
      username: username.current.value,
    },
  };
}
