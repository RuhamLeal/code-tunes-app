import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import getAllAudios from '../helpers/getAllAudios.js';
import FavButton from './FavButton.jsx';

function MusicCard({
  audioUrl, musicName, trackId, artistName, albumId, albumName,
}) {
  const location = useLocation().pathname;

  const handlePlay = ({ target }) => {
    const audios = getAllAudios();
    audios.forEach((audio) => {
      if (audio !== target) audio.pause();
    });
  };

  return (
    <section className="album-music-card-container">
      <aside className="album-music-card">
        <div className="music-title-container">
          <h3>{ musicName }</h3>
          <h4>
            From:
            {' '}
            {artistName}
          </h4>
        </div>
        {location === '/favorites' ? (
          <Link to={`/album/${albumId}`}>
            <h6>{albumName}</h6>
          </Link>
        ) : null}
        <audio className="music-audio" onPlay={handlePlay} src={audioUrl} controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
        </audio>
        <FavButton trackId={trackId} />
      </aside>
      <hr className="music-hr" />
    </section>

  );
}

MusicCard.propTypes = {
  audioUrl: PropTypes.string.isRequired,
  musicName: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  albumId: PropTypes.number.isRequired,
};

export default MusicCard;
