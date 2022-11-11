import PropTypes, { shape } from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getFavMusics from '../redux/actions/getFavMusics';
import Loading from './Loading.jsx';
import MusicCard from './MusicCard';

function FavMusics({ dispatch, favMusics, deletedMusic }) {
  useEffect(() => {
    dispatch(getFavMusics());
  }, [deletedMusic]);

  if (!favMusics) return <Loading />;
  if (favMusics.length === 0) {
    return (
      <h2>
        Nenhuma musica curtida ainda,
        pesquise por artistas e albums,
        curta e volta aqui para ver suas
        musicas preferidas
      </h2>
    );
  }

  return (
    <section>
      { favMusics.map((music) => (
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
