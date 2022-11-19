import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function BasicExample() {
  return (
    <Spinner className="loading-component" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default BasicExample;
