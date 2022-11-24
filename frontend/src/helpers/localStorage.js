export const setLocalStorageUser = (username, token) => {
  localStorage.setItem('user', JSON.stringify({
    username,
    token,
  }));
};

export const getLocalStorageUsername = () => {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).username;
  } return '';
};

export const getLocalStorageToken = () => JSON.parse(localStorage.getItem('user')).token;

export const cleanUserLocalStorage = () => localStorage.removeItem('user');
