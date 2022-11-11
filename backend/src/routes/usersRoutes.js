import express from 'express';
import UserController from '../controllers/usersController.js';

const userRouter = express.Router();

userRouter
  .get('/user/:userId', UserController.getUser)
  .put('/user/:userId', UserController.updateUser)
  .post('/register', UserController.registerUser)
  .post('/login', UserController.logUser);

export default userRouter;
