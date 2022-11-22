import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { connect } from 'react-redux';
import { FaExclamationCircle } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { validateProfileEditing } from '../helpers/logonValidate';
import getUser from '../redux/actions/getUser';
import updateUser from '../redux/actions/updateUser';
import cleanUpdatedUserMessage from '../redux/actions/cleanUpdatedUserMessage';
import { getLocalStorageToken, setLocalStorageUser } from '../helpers/localStorage';

function EditProfileField({ dispatch, userData, editResponse }) {
  const confirmPassword = useRef(null);
  const history = useHistory();
  const [form] = useAutoAnimate();
  const [validationMessage, setValidationMessage] = useState('');
  const [checkPasswordMessage, setPasswordMessage] = useState('');
  const [editUserData, setEditUserData] = useState({
    userName: '',
    name: '',
    email: '',
    img: '',
  });

  useEffect(() => {
    if (editResponse === 'Usuario atualizado com sucesso') {
      dispatch(cleanUpdatedUserMessage());
      history.push('/profile');
    } else {
      setPasswordMessage(editResponse);
    }
  }, [editResponse]);

  useEffect(() => {
    if (!userData) dispatch(getUser());
    else {
      setEditUserData({
        userName: userData.userName,
        name: userData.name,
        email: userData.email,
        img: userData.img,
      });
    }
  }, [userData]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setEditUserData({
      ...editUserData,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const editedUserData = {
      userName: editUserData.userName,
      name: editUserData.name,
      email: editUserData.email,
      img: editUserData.img,
      passWord: confirmPassword.current.value,
    };

    const isValidated = validateProfileEditing(editedUserData);

    if (isValidated !== 'validated') {
      setPasswordMessage('');
      setValidationMessage(isValidated);
    } else {
      setLocalStorageUser(editedUserData.userName, getLocalStorageToken());
      dispatch(updateUser(editedUserData));
      setValidationMessage('');
      setPasswordMessage(editResponse);
    }
  };

  return (
    <section className="edit-profile-main">
      <Form className="edit-profile-form" onSubmit={onSubmit} ref={form}>
        <section className="edit-profile-img-container">
          <img src={editUserData.img} alt="profile-img" width={300} />
          <div>
            <input
              onChange={(event) => setEditUserData({
                ...editUserData, img: URL.createObjectURL(event.target.files[0]),
              })}
              type="file"
              id="myfile"
              name="myfile"
            />
            <button
              className="cancel-img-button"
              type="button"
              onClick={() => setEditUserData({
                ...editUserData,
                img: userData.img,
              })}
            >
              x
            </button>
          </div>
        </section>
        <section className="edit-profile-fields">
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={handleChange} value={editUserData.userName} name="userName" type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control onChange={handleChange} value={editUserData.name} name="name" type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleChange} value={editUserData.email} name="email" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
            <Form.Label>Confirm Your Password</Form.Label>
            <Form.Control ref={confirmPassword} type="password" placeholder="Confirm Password" />
          </Form.Group>
          { validationMessage.length > 0 ? (
            <div className="edit-profile-message-container">
              <FaExclamationCircle />
              <h5>{validationMessage}</h5>
            </div>
          ) : null}
          { checkPasswordMessage.length > 0 ? (
            <div className="edit-profile-message-container">
              <FaExclamationCircle />
              <h5>{checkPasswordMessage}</h5>
            </div>
          ) : null}
          <Button variant="success" type="submit">
            Editar
          </Button>
        </section>
      </Form>
    </section>
  );
}

EditProfileField.propTypes = {
  userData: PropTypes.shape(),
  dispatch: PropTypes.func.isRequired,
  editResponse: PropTypes.string.isRequired,
};

EditProfileField.defaultProps = {
  userData: null,
};

const mapStateToProps = (state) => ({
  userData: state.profileReducer.userData,
  editResponse: state.profileReducer.editResponse,
});

export default connect(mapStateToProps)(EditProfileField);
