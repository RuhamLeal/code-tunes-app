import PropTypes, { shape } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import getFavMusics from '../redux/actions/getFavMusics';
import MusicCard from './MusicCard';

function FavMusics({ dispatch, favMusics, deletedMusic }) {
  const [filterFavMusics, setFilterFavMusics] = useState([]);

  useEffect(() => {
    dispatch(getFavMusics());
  }, [deletedMusic]);

  useEffect(() => {
    if (favMusics) setFilterFavMusics(favMusics);
  }, [favMusics]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterFavMusics(
      favMusics.filter((music) => (
        music.musicName.toLowerCase().includes(value) || music.musicName.includes(value)
      )),
    );
  };

  if (!favMusics) return null;
  if (favMusics.length === 0) {
    return (
      <h2 className="empty-fav-music-title">
        Nenhuma musica curtida ainda,
        pesquise por artistas e albums,
        curta e volta aqui para ver suas
        musicas preferidas
      </h2>
    );
  }

  return (
    <section className="favorites-musics-main-container">
      <div className="input-search-container">
        <FloatingLabel
          controlId="floatingInput"
          label="Search for a music..."
          className="mb-3 search-input"
        >
          <Form.Control onChange={handleChange} type="text" placeholder="Search" />
        </FloatingLabel>
      </div>
      <section className="fav-musics-container">
        { filterFavMusics.map((music) => (
          <MusicCard
            key={music.trackId}
            trackId={music.trackId}
            musicName={music.musicName}
            audioUrl={music.audioUrl}
            artistName={music.artistName}
            albumName={music.albumName}
            albumId={music.albumId}
          />
        )) }
      </section>
    </section>
  );
}

FavMusics.propTypes = {
  favMusics: PropTypes.arrayOf(shape()),
  dispatch: PropTypes.func.isRequired,
  deletedMusic: PropTypes.number,
};

FavMusics.defaultProps = {
  favMusics: null,
  deletedMusic: null,
};

const mapStateToProps = (state) => ({
  favMusics: state.albumReducer.favMusics,
  deletedMusic: state.albumReducer.deletedMusic,
});

export default connect(mapStateToProps)(FavMusics);
