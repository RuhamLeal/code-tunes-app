import PropTypes from 'prop-types';
import React from 'react';
import getAllAudios from '../helpers/getAllAudios.js';
import FavButton from './FavButton.jsx';

function MusicCard({ audioUrl, musicName, trackId }) {
  const handlePlay = ({ target }) => {
    const audios = getAllAudios();
    audios.forEach((audio) => {
      if (audio !== target) audio.pause();
    });
  };

  return (
    <section>
      <h3>{ musicName }</h3>
      <audio onPlay={handlePlay} src={audioUrl} controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
      </audio>
      <FavButton trackId={trackId} />
    </section>
  );
}

MusicCard.propTypes = {
  audioUrl: PropTypes.string.isRequired,
  musicName: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};

export default MusicCard;
