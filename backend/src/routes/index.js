import express from 'express';
import musicRouter from './musicsRoutes.js';
import userRouter from './usersRoutes.js';

const routes = (app) => {
  app.use(
    express.json(),
    musicRouter,
    userRouter,
  );
};

export default routes;
