import express from 'express';
import UserController from '../controllers/usersController.js';
import tokenAuthentication from '../middlewares/authentication.js';
import userValidation from '../middlewares/userValidation.js';

const userRouter = express.Router();

userRouter
  .get('/user', tokenAuthentication, UserController.getUser)
  .put('/user', tokenAuthentication, userValidation, UserController.updateUser)
  .post('/register', userValidation, UserController.registerUser)
  .post('/login', UserController.logUser);

export default userRouter;
