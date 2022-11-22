/* eslint-disable max-len */
import User from '../models/User.js';
import generateToken from '../utils/jwtGenerate.js';

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
    const { userId } = req;
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

    User.findById(userId, (firstErr, userCalled) => {
      if (firstErr) res.status(500).json({ errorMessage: firstErr.message });
      else if (!userCalled) res.status(400).json({ message: 'Usuario não encontrado, verifica o ID passado' });
      else if (userCalled.userName === userName) {
        if (userCalled.email === email) {
          User.findByIdAndUpdate(userId, updatedUser, (secondErr, userToUpdate1) => {
            if (secondErr) res.status(500).json({ errorMessage: secondErr.message });
            else if (userToUpdate1.passWord !== passWord) {
              res.status(400).json({ message: 'Senha inválida' });
            } else res.status(200).json({ message: 'Usuario atualizado com sucesso' });
          });
        } else {
          User.findOne({ 'email': email }, {}, (thirdErr, user1) => {
            if (thirdErr) res.status(500).json({ errorMessage: thirdErr.message });
            else if (user1) res.status(400).json({ message: 'Email já cadastrado' });
            else {
              User.findByIdAndUpdate(userId, updatedUser, (fourthErr, userToUpdate2) => {
                if (fourthErr) res.status(500).json({ errorMessage: fourthErr.message });
                else if (userToUpdate2.passWord !== passWord) {
                  res.status(400).json({ message: 'Senha inválida' });
                } else res.status(200).json({ message: 'Usuario atualizado com sucesso' });
              });
            }
          });
        }
      } else {
        User.findOne({ 'userName': userName }, {}, (fifthErr, user2) => {
          if (fifthErr) res.status(500).json({ errorMessage: fifthErr.message });
          else if (user2) res.status(400).json({ message: 'Username já cadastrado' });
          else if (userCalled.email === email) {
            User.findByIdAndUpdate(userId, updatedUser, (sixthErr, userToUpdate3) => {
              if (sixthErr) res.status(500).json({ errorMessage: sixthErr.message });
              else if (userToUpdate3.passWord !== passWord) {
                res.status(400).json({ message: 'Senha inválida' });
              } else res.status(200).json({ message: 'Usuario atualizado com sucesso' });
            });
          } else {
            User.findOne({ 'email': email }, {}, (seventhErr, user3) => {
              if (seventhErr) res.status(500).json({ errorMessage: seventhErr.message });
              else if (user3) res.status(400).json({ message: 'Email já cadastrado' });
              else {
                User.findByIdAndUpdate(userId, updatedUser, (eighthErr, userToUpdate4) => {
                  if (eighthErr) res.status(500).json({ errorMessage: eighthErr.message });
                  else if (userToUpdate4.passWord !== passWord) {
                    res.status(400).json({ message: 'Senha inválida' });
                  } else res.status(200).json({ message: 'Usuario atualizado com sucesso' });
                });
              }
            });
          }
        });
      }
    });
  };

  static getUser = (req, res) => {
    const { userId } = req;
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
      else if (user[0]) res.status(200).json({ token: generateToken({ id: user[0]['_id'] }) });
      else res.status(404).json({ message: 'Usuario não encontrado ou inexistente' });
    });
  };
}

export default UserController;
