export const setLocalStorageUser = (username, userId, token) => {
  localStorage.setItem('user', JSON.stringify({
    username,
    userId,
    token,
  }));
};

export const getLocalStorageUsername = () => {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).username;
  } return '';
};

export const getLocalStorageUserId = () => {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).userId;
  } return '';
};

export const getLocalStorageToken = () => JSON.parse(localStorage.getItem('user')).token;

export const cleanUserLocalStorage = () => localStorage.removeItem('user');
