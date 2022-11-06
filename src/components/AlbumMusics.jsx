import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import getAlbumMusics from '../redux/actions/getAlbumMusics';

function AlbumMusics({ dispatch }) {
  const { albumId } = useParams();

  useEffect(() => {
    dispatch(getAlbumMusics(Number(albumId)));
  }, []);

  return (
    <div>AlbumMusics</div>
  );
}

AlbumMusics.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AlbumMusics);
