import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FaExclamationCircle } from 'react-icons/fa';
import codetuneslogo from '../images/codetuneslogo.png';
import loginValidate from '../helpers/loginValidate.js';
import logUser from '../redux/actions/logUser.js';
import cleanLogUser from '../redux/actions/cleanLogUser.js';

function LoginField({ history, dispatch, logMessage }) {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const [fieldsContainer] = useAutoAnimate();
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
    <form className="login-form-container" onSubmit={handleSubmit}>
      <section className="login-fields-container" ref={fieldsContainer}>
        <img src={codetuneslogo} alt="code-tune-logo" width={150} />
        <section className="login-input-container">
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
        </section>
        { emptyFields ? (
          <div className="login-message-container">
            <FaExclamationCircle />
            <h6> Preencha todos os campos</h6>
          </div>
        ) : null }
        { NotFoundUser ? (
          <div className="login-message-container">
            <FaExclamationCircle />
            <h6> Login ou senha incorretos</h6>
          </div>
        ) : null }
        <Button className="login-button" type="Submit" variant="success">Log in</Button>
      </section>
      <section className="linkToRegisterPage-container">
        <h6>Don&apos;t have an account?</h6>
        <Link to="/register">
          <h6>Sign up now</h6>
        </Link>
      </section>
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
