import newUserSchema from '../utils/validations/joiValidationSchemas.js';

const newUserValidation = async (req, res, next) => {
  const { error } = newUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  return next();
};

export default newUserValidation;
