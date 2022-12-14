import Music from '../models/Music.js';

class MusicController {
  static showFavMusics = (req, res) => {
    const { userId } = req;
    Music.find({ 'userId': userId }, {}, (err, foundMusics) => {
      if (err) {
        res.status(500).json({ message: `${err.message} Nao foi encontrada nenhuma musica (Verifica o id passado)` });
      } else res.status(201).json(foundMusics);
    });
  };

  static addFavMusic = (req, res) => {
    const { userId } = req;
    const newMusic = new Music({ ...req.body, userId });

    newMusic.save((err) => {
      if (err) {
        res.status(500).json({ message: `${err.message} - Nao foi possivel adicionar musica` });
      } else {
        res.status(201).json({
          message: 'Musica adicionada com sucesso',
          musica: newMusic,
        });
      }
    });
  };

  static deleteFavMusic = (req, res) => {
    const { trackId } = req.body;
    const { userId } = req;

    Music.findOneAndDelete({ 'trackId': trackId, 'userId': userId }, {}, (err) => {
      if (err) res.status(500).json({ message: `${err.message} - Musica não encontrada ou inexistente` });
      else res.status(200).json({ message: 'Musica removida com sucesso' });
    });
  };
}

export default MusicController;
