import React, { useState } from 'react';
/* import PropTypes from 'prop-types'; */
import { BsHeart, BsHeartFill } from 'react-icons/bs';

function FavButton() {
  const [isFavorite, setFavorite] = useState(false);

  if (isFavorite) return <BsHeartFill onClick={() => setFavorite(!isFavorite)} />;

  return <BsHeart onClick={() => setFavorite(!isFavorite)} />;
}

FavButton.propTypes = {};

export default FavButton;
