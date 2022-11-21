import express from 'express';
import ItunesController from '../controllers/itunesController.js';

const itunesRouter = express.Router();

itunesRouter
  .get('/albums/:query', ItunesController.getItunesAlbums)
  .get('/musics/:albumId', ItunesController.getItunesMusics);

export default itunesRouter;
