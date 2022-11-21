import express from 'express';
import itunesRouter from './itunesRoutes.js';
import musicRouter from './musicsRoutes.js';
import userRouter from './usersRoutes.js';

const routes = (app) => {
  app.use(
    express.json(),
    musicRouter,
    userRouter,
    itunesRouter,
  );
};

export default routes;
