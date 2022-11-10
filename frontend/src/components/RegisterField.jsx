import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import validateRegistration from '../helpers/logonValidate.js';
import registerUser from '../redux/actions/registerUser.js';

function RegisterField({ history, dispatch, registerMessage }) {
  const userNameRef = useRef(null);
  const mameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const policyRef = useRef(null);
  const [form] = useAutoAnimate();
  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => {
    if (registerMessage === 'Usuario cadastrado com sucesso') {
      history.push('/');
    }
  }, [registerMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const refs = {
      userName: userNameRef.current.value,
      name: mameRef.current.value,
      email: emailRef.current.value,
      passWord: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
      policy: policyRef.current.checked,
    };

    const isValidated = validateRegistration(refs);

    if (isValidated !== 'validated') setValidationMessage(isValidated);
    else {
      dispatch(registerUser(refs));
      setValidationMessage('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} ref={form}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control ref={userNameRef} type="text" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control ref={mameRef} type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check ref={policyRef} type="checkbox" label="I agree with the Code Tunes policy" />
      </Form.Group>
      { validationMessage.length > 0 ? <h5>{validationMessage}</h5> : null}
      { registerMessage.length > 0 ? <h5>{registerMessage}</h5> : null}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  registerMessage: state.registrationReducer.registerMessage,
});

RegisterField.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  registerMessage: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(RegisterField);
