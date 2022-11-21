import express from 'express';
import ItunesController from '../controllers/itunesController.js';
import tokenAuthentication from '../middlewares/authentication.js';

const itunesRouter = express.Router();

itunesRouter
  .get('/albums/:query', tokenAuthentication, ItunesController.getItunesAlbums)
  .get('/musics/:albumId', ItunesController.getItunesMusics);

export default itunesRouter;
