const loginValidate = (username, password) => {
  if (username.current.value.length > 0 && password.current.value.length > 0) return true;
  return false;
};

export default loginValidate;
