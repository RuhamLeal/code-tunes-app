const validateUsername = (username) => {
  if (username.length === 0) return 'Preencha todos os campos';
  if (username.length < 4 && username.length > 0) return 'O seu Username tem que ter mais de 3 caracteres';
  if (username.indexOf(' ') !== -1) return 'O seu Username não pode ter espaçamento';
  return 'validated';
};

const validateName = (name) => {
  const re = /^\s|\s[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ']+$/;
  if (name.length === 0) return 'Preencha todos os campos';
  if (!re.test(name)) return 'Nome incompleto ou inválido';
  return 'validated';
};

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  if (email.length === 0) return 'Preencha todos os campos';
  if (!re.test(email)) return 'Insira o email corretamente';
  return 'validated';
};

const validateVerifyingPassword = (password) => {
  if (!password || password.length === 0) return 'Preencha todos os campos';
  return 'validated';
};

const validatePassword = (password, confirmPassword) => {
  if (password.length === 0 || confirmPassword.length === 0) return 'Preencha todos os campos';
  if (password !== confirmPassword) return 'As senhas inseridas são diferentes';
  if (password.length < 4) return 'Crie uma senha com mais de 3 caracteres';
  return 'validated';
};

const validatePolicy = (checked) => {
  if (checked === false) return 'Você precisa concordar com a politica da Code Tunes para continuar';
  return 'validated';
};

export const validateRegistration = (
  {
    userName, name, email, passWord, confirmPassword, policy,
  },
) => {
  const validations = [
    validateUsername(userName),
    validateName(name),
    validateEmail(email),
    validatePassword(passWord, confirmPassword),
    validatePolicy(policy),
  ];

  for (let idx = 0; idx < validations.length; idx += 1) {
    if (validations[idx] !== 'validated') return validations[idx];
  }

  return 'validated';
};

export const validateProfileEditing = (
  {
    userName, name, email, passWord,
  },
) => {
  const validations = [
    validateUsername(userName),
    validateName(name),
    validateEmail(email),
    validateVerifyingPassword(passWord),
  ];

  for (let idx = 0; idx < validations.length; idx += 1) {
    if (validations[idx] !== 'validated') return validations[idx];
  }

  return 'validated';
};
