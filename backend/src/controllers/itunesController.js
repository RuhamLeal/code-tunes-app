import { getMusics, getAlbums } from '../models/Itunes.js';

class itunesController {
  static getItunesMusics = async (req, res) => {
    try {
      const { id } = req.params;
      const { album, musics } = await getMusics(id);
      res.status(201).json({ album, musics });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  static getItunesAlbums = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await getAlbums(id);
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
}

export default itunesController;
