import React, { useState } from 'react';
import PropTypes, { shape } from 'prop-types';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { connect } from 'react-redux';
import addFavMusic from '../redux/actions/addFavMusic';

function FavButton({ trackId, musics, dispatch }) {
  const [isFavorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    if (musics) {
      if (!isFavorite) {
        const track = musics.find((music) => music.trackId === trackId);
        dispatch(addFavMusic(track));
      }
    }
    setFavorite(!isFavorite);
  };

  if (isFavorite) return <BsHeartFill onClick={handleFavorite} />;

  return <BsHeart onClick={handleFavorite} />;
}

const mapStateToProps = (state) => ({
  musics: state.albumReducer.musics,
});

FavButton.propTypes = {
  trackId: PropTypes.number.isRequired,
  musics: PropTypes.arrayOf(shape()).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(FavButton);
