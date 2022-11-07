import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import loginValidate from '../helpers/loginValidate.js';
import logUser from '../redux/actions/logUser.js';
import cleanLogUser from '../redux/actions/cleanLogUser.js';

function LoginField({ history, dispatch, logMessage }) {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const [form] = useAutoAnimate();
  const [emptyFields, setEmptyFields] = useState(false);
  const [NotFoundUser, setNotFoundUser] = useState(false);

  useEffect(() => {
    if (logMessage === 'Usuario logado') {
      dispatch(cleanLogUser());
      history.push('/search');
    }
    if (logMessage === 'Usuario não encontrado ou inexistente') {
      setNotFoundUser(true);
      setEmptyFields(false);
    }
  }, [logMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loginValidate(userNameRef, passwordRef)) {
      dispatch(logUser({
        userName: userNameRef.current.value,
        passWord: passwordRef.current.value,
      }));
      if (logMessage === 'Usuario não encontrado ou inexistente') {
        setNotFoundUser(true);
        setEmptyFields(false);
      }
    } else {
      setNotFoundUser(false);
      setEmptyFields(true);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control ref={userNameRef} type="text" placeholder="Username" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
      </FloatingLabel>
      { emptyFields ? <h6> ! Preencha todos os campos</h6> : null }
      { NotFoundUser ? <h6> ! Login ou senha incorretos</h6> : null }
      <Button type="Submit" variant="primary">Entrar</Button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  logMessage: state.loginReducer.logMessage,
});

LoginField.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  logMessage: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LoginField);
