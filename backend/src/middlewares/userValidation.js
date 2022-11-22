import validUserSchema from '../utils/validations/joiValidationSchemas.js';

const userValidation = async (req, res, next) => {
  const { error } = validUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  return next();
};

export default userValidation;
