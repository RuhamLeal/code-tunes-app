export const setLocalStorageUser = (username, userId) => {
  localStorage.setItem('user', JSON.stringify({
    username,
    userId,
  }));
};

export const x = 4;
