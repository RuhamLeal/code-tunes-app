import express from 'express';
import UserController from '../controllers/usersController.js';
import tokenAuthentication from '../middlewares/authentication.js';

const userRouter = express.Router();

userRouter
  .get('/user/:userId', tokenAuthentication, UserController.getUser)
  .put('/user/:userId', tokenAuthentication, UserController.updateUser)
  .post('/register', UserController.registerUser)
  .post('/login', UserController.logUser);

export default userRouter;
