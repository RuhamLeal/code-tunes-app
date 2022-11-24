import PropTypes, { shape } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AlbumCard from './AlbumCard.jsx';

function Albums({ albums, albumsQuant, artist }) {
  if (!albums) return null;
  if (albums.length === 0) {
    return (
      <h2 className="result-message">{`Nenhum album de ${artist} encontrado`}</h2>
    );
  }
  return (
    <section className="albun-main-field">
      <div className="result-title-container">
        <h2 className="result-message">{`Foram encontrados ${albumsQuant} albums de ${artist}:`}</h2>
      </div>
      <section className="albuns-container">
        { albums.map((album) => (
          <AlbumCard
            key={album.collectionId}
            id={album.collectionId}
            img={album.artworkUrl100}
            albumName={album.collectionName}
            artistName={album.artistName}
            albumGenre={album.primaryGenreName}
          />
        )) }
      </section>
    </section>
  );
}

Albums.propTypes = {
  albums: PropTypes.arrayOf(shape()),
  albumsQuant: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
};

Albums.defaultProps = {
  albums: null,
};

const mapStateToProps = (state) => ({
  albums: state.searchReducer.albumData,
  albumsQuant: state.searchReducer.albumQuant,
  artist: state.searchReducer.query,
});

export default connect(mapStateToProps)(Albums);
