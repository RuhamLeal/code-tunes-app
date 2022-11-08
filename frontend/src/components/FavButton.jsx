import React, { useEffect, useState } from 'react';
import PropTypes, { shape } from 'prop-types';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { connect } from 'react-redux';
import addFavMusic from '../redux/actions/addFavMusic';
import deleteFavMusic from '../redux/actions/deleteFavMusic';

function FavButton({
  trackId, musics, dispatch, favMusics,
}) {
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    if (favMusics && favMusics.length > 0) {
      favMusics.forEach((music) => {
        if (music.trackId === trackId) setFavorite(true);
      });
    }
  }, [favMusics]);

  const handleFavorite = () => {
    if (musics) {
      const track = musics.find((music) => music.trackId === trackId);
      if (!isFavorite) {
        dispatch(addFavMusic(track));
      } else dispatch(deleteFavMusic(track));
    }
    setFavorite(!isFavorite);
  };

  if (isFavorite) return <BsHeartFill onClick={handleFavorite} />;

  return <BsHeart onClick={handleFavorite} />;
}

const mapStateToProps = (state) => ({
  musics: state.albumReducer.musics,
  favMusics: state.albumReducer.favMusics,
});

FavButton.propTypes = {
  trackId: PropTypes.number.isRequired,
  musics: PropTypes.arrayOf(shape()).isRequired,
  dispatch: PropTypes.func.isRequired,
  favMusics: PropTypes.arrayOf(shape()),
};

FavButton.defaultProps = {
  favMusics: null,
};

export default connect(mapStateToProps)(FavButton);
