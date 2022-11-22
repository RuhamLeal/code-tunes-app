import Joi from 'joi';

const newUserSchema = Joi.object({
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
    .pattern(/\s/)
    .message({
      'string.pattern.base': 'Full name required',
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

export default newUserSchema;
