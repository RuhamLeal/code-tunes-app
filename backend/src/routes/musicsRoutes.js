import express from 'express';
import MusicController from '../controllers/musicsController.js';
import tokenAuthentication from '../middlewares/authentication.js';

const musicRouter = express.Router();

musicRouter
  .get('/fav-musics', tokenAuthentication, MusicController.showFavMusics)
  .post('/fav-musics', tokenAuthentication, MusicController.addFavMusic)
  .delete('/fav-musics', tokenAuthentication, MusicController.deleteFavMusic);

export default musicRouter;
