import User from '../models/User.js';

class UserController {
  static registerUser = (req, res) => {
    const newUser = new User(req.body);

    newUser.save((err) => {
      if (err) {
        res.status(400).json(
          { message: `${err.message} Usuario nao cadastrado, verifica se os dados foram inseridos corretamente` },
        );
      } else res.status(200).json({ message: 'Usuario cadastrado com sucesso' });
    });
  };

  static logUser = (req, res) => {
    const { userName, passWord } = req.body;

    User.find({ 'userName': userName, 'passWord': passWord }, {}, (err, user) => {
      if (err) res.status(404).json({ message: 'Usuario não encontrado ou inexistente' });
      else res.status(200).json({ userId: user[0]['_id'] });
    });
  };
}

export default UserController;
