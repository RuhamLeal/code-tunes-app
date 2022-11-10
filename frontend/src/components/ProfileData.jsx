import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FiEdit } from 'react-icons/fi';
import { connect } from 'react-redux';

function ProfileData({ history, dispatch, userData }) {
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <main>
      <section>
        { userData ? <h6>{userData.userName}</h6> : null }
        { userData ? <h6>{userData.name}</h6> : null }
        { userData ? <h6>{userData.passWord}</h6> : null }
      </section>
      <section>
        <Button onClick={() => history.push('/profile/edit')} variant="Secondary" type="button">
          <FiEdit />
        </Button>
      </section>
    </main>
  );
}

ProfileData.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  userData: PropTypes.shape(),
  dispatch: PropTypes.func.isRequired,
};

ProfileData.defaultProps = {
  userData: null,
};

const mapStateToProps = (state) => ({
  userData: state.profileReducer.userData,
});

export default connect(mapStateToProps)(ProfileData);
