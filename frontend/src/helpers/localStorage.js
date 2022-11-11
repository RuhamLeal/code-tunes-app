export const setLocalStorageUser = (username, userId) => {
  localStorage.setItem('user', JSON.stringify({
    username,
    userId,
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

export const cleanUserLocalStorage = () => localStorage.removeItem('user');
