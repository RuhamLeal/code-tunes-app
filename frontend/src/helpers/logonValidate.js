const validateUsername = (username) => {
  if (username.length === 0) return 'Preencha todos os campos';
  if (username.length < 4 && username.length > 0) return 'O seu Username tem que ter mais de 3 caracteres';
  if (username.indexOf(' ') !== -1) return 'O seu Username não pode ter espaçamento';
  return 'validated';
};

const validateName = (name) => {
  if (name.length === 0) return 'Preencha todos os campos';
  if (name.indexOf(' ') === -1) return 'Insira seu nome completo';
  return 'validated';
};

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  if (email.length === 0) return 'Preencha todos os campos';
  if (!re.test(email)) return 'Insira o email corretamente';
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

const validateRegistration = (
  {
    username, name, email, password, confirmPassword, policy,
  },
) => {
  const validations = [
    validateUsername(username),
    validateName(name),
    validateEmail(email),
    validatePassword(password, confirmPassword),
    validatePolicy(policy),
  ];

  console.log(validations);

  for (let idx = 0; idx < validations.length; idx += 1) {
    if (validations[idx] !== 'validated') return validations[idx];
  }

  return 'validated';
};

export default validateRegistration;
