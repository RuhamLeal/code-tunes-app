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

  static updateUser = (req, res) => {
    const { userId } = req.params;
    const {
      userName,
      name,
      email,
      img,
      passWord,
    } = req.body;

    const updatedUser = {
      userName,
      name,
      email,
      img,
    };

    User.findByIdAndUpdate(userId, updatedUser, (err, user) => {
      if (err) res.status(500).json({ message: err.message });
      else if (user.passWord !== passWord) {
        res.status(400).json({ message: 'Senha inválida' });
      } else res.status(200).json({ message: 'Usuario atualizado com sucesso' });
    });
  };

  static getUser = (req, res) => {
    const { userId } = req.params;
    User.findOne({ '_id': userId }, {}, (err, user) => {
      if (err) res.status(500).json({ message: err.message });
      else {
        res.status(201).json({
          userName: user.userName,
          name: user.name,
          email: user.email,
          img: user.img,
        });
      }
    });
  };

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
