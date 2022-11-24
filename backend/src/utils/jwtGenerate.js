import jwt from 'jsonwebtoken';
import secretKey from '../config/auth.js';

const generateToken = (params = {}) => (
  jwt.sign(params, secretKey, { expiresIn: 360 })
);

export default generateToken;
