import express from 'express';
import musicRouter from './musicsRoutes.js';

const routes = (app) => {
  app.use(
    express.json(),
    musicRouter,
  );
};

export default routes;
