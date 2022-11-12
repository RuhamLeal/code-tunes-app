import React, { useRef } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import getAlbums from '../redux/actions/getAlbums';

function SearchField({ dispatch }) {
  const searchRef = useRef(null);

  const handleSearch = () => {
    dispatch(getAlbums(searchRef.current.value));
  };

  return (
    <section className="search-container">
      <FloatingLabel
        controlId="floatingInput"
        label="Search for an artist or album..."
        className="mb-3 search-input"
      >
        <Form.Control ref={searchRef} type="text" placeholder="Search" />
      </FloatingLabel>
      <Button className="search-button" onClick={handleSearch} variant="Secondary" type="button">
        <IconContext.Provider value={{ className: 'search-icon', size: 25 }}>
          <BsSearch />
        </IconContext.Provider>
      </Button>
    </section>
  );
}

SearchField.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SearchField);
