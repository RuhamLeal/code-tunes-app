/* eslint-disable max-len */
import User from '../models/User.js';

class UserController {
  static registerUser = (req, res) => {
    const { userName, email } = req.body;
    const newUser = new User(req.body);

    User.findOne({ 'userName': userName }, {}, (err, user) => {
      if (err) res.status(500).json({ errorMessage: err.message });
      else if (user) res.status(400).json({ message: 'Username já cadastrado' });
      else {
        User.findOne({ 'email': email }, {}, (error, sameUser) => {
          if (error) res.status(500).json({ errorMessage: error.message });
          else if (sameUser) res.status(400).json({ message: 'Email já cadastrado' });
          else {
            newUser.save((otherError) => {
              if (otherError) {
                res.status(500).json(
                  { errorMessage: `${otherError.message} Usuario nao cadastrado, verifica se os dados foram inseridos corretamente` },
                );
              } else res.status(200).json({ message: 'Usuario cadastrado com sucesso' });
            });
          }
        });
      }
    });
  };

  /*         newUser.save((error) => {
          if (error) {
            res.status(400).json(
              { message: `${error.message} Usuario nao cadastrado, verifica se os dados foram inseridos corretamente` },
            );
          } else res.status(200).json({ message: 'Usuario cadastrado com sucesso' });
        }); */

  static logUser = (req, res) => {
    const { userName, passWord } = req.body;

    User.find({ 'userName': userName, 'passWord': passWord }, {}, (err, user) => {
      if (err) res.status(500).json({ message: err.message });
      else if (user[0]) res.status(200).json({ userId: user[0]['_id'] });
      else res.status(404).json({ message: 'Usuario não encontrado ou inexistente' });
    });
  };
}

export default UserController;
