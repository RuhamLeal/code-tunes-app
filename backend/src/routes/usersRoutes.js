import express from 'express';
import UserController from '../controllers/usersController.js';

const userRouter = express.Router();

userRouter
  .post('/register', UserController.registerUser)
  .post('/login', UserController.logUser);

export default userRouter;
