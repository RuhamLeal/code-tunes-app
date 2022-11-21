import jwt from 'jsonwebtoken';
import secretKey from '../config/auth.js';

const tokenAuthentication = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if (!token) { return res.status(401).json({ tokenErr: 'No token provided' }); }

  const tokenParts = token.split(' ');

  if (!tokenParts.length === 2) { return res.status(401).json({ tokenErr: 'Token Error' }); }

  const [scheme, jwtToken] = tokenParts;

  if (!/^Bearer$/i.test(scheme)) { return res.status(401).json({ tokenErr: 'Wrong token format' }); }

  jwt.verify(jwtToken, secretKey, (err, decoded) => {
    if (err) return res.status(401).json({ tokenErr: 'Token invalid' });

    req.userId = decoded.id;
    return next();
  });
};

export default tokenAuthentication;
