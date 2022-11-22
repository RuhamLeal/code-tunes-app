import Joi from 'joi';

const validUserSchema = Joi.object({
  userName: Joi.string()
    .min(4)
    .pattern(/^\S*$/)
    .message({
      'string.pattern.base': 'username cannot have spaces',
    })
    .required(),

  passWord: Joi.string()
    .min(4)
    .required(),

  name: Joi.string()
    .min(1)
    .pattern(/^\s|\s[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ']+$/)
    .message({
      'string.pattern.base': 'Full name required --- numbers and special characters are not allowed',
    })
    .required(),

  email: Joi.string()
    .min(1)
    .pattern(/\S+@\S+\.\S+/)
    .message({
      'string.pattern.base': 'Invalid email',
    })
    .required(),
});

export default validUserSchema;
