import { getMusics, getAlbums } from '../models/Itunes.js';

class ItunesController {
  static getItunesMusics = async (req, res) => {
    try {
      const { albumId } = req.params;
      const { album, musics } = await getMusics(albumId);
      res.status(201).json({ album, musics });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  static getItunesAlbums = async (req, res) => {
    try {
      const { query } = req.params;
      const response = await getAlbums(query);
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
}

export default ItunesController;
