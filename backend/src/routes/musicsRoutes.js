import express from 'express';
import MusicController from '../controllers/musicsController.js';

const musicRouter = express.Router();

musicRouter
  .get('/fav-musics', MusicController.showFavMusics)
  .post('/fav-musics', MusicController.addFavMusic)
  .delete('/fav-musics/:musicId', MusicController.deleteFavMusic);

export default musicRouter;
