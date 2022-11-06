import PropTypes, { shape } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AlbumCard from './AlbumCard.jsx';

function Albums({ albums, albumsQuant, artist }) {
  if (!albums) return null;
  if (albums.length === 0) {
    return (
      <h2>{`Nenhum album de ${artist} encontrado`}</h2>
    );
  }
  return (
    <section>
      <h2>{`Foram encontrados ${albumsQuant} albums de ${artist}:`}</h2>
      { albums.map((album) => (
        <AlbumCard
          img={album.artworkUrl100}
          albumName={album.collectionName}
          artistName={album.artistName}
          albumGenre={album.primaryGenreName}
        />
      )) }
    </section>
  );
}

Albums.propTypes = {
  albums: PropTypes.arrayOf(shape()).isRequired,
  albumsQuant: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  albums: state.searchReducer.albumData,
  albumsQuant: state.searchReducer.albumQuant,
  artist: state.searchReducer.query,
});

export default connect(mapStateToProps)(Albums);
