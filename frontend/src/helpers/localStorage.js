export const setLocalStorageUser = (username, userId) => {
  localStorage.setItem('user', JSON.stringify({
    username,
    userId,
  }));
};

export const getLocalStorageUsername = () => JSON.parse(localStorage.getItem('user')).username;

export const getLocalStorageUserId = () => JSON.parse(localStorage.getItem('user')).userId;
