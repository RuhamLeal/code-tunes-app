import PropTypes, { shape } from 'prop-types';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import getAlbumMusics from '../redux/actions/getAlbumMusics';
import MusicCard from './MusicCard.jsx';
import getFavMusics from '../redux/actions/getFavMusics';

function AlbumMusics({ dispatch, album, musics }) {
  const { albumId } = useParams();

  useEffect(() => {
    dispatch(getAlbumMusics(Number(albumId)));
    dispatch(getFavMusics());
  }, []);

  if (!album || !musics) return null;

  const qualityImg = album.artworkUrl100.replace(/100x100/gi, () => '500x500');

  return (
    <section className="album-musics-container">
      <Card className="album-page-card" border="success" style={{ width: '420px' }}>
        <Card.Img variant="top" src={qualityImg} />
        <Card.Body>
          <Card.Title>{album.collectionName}</Card.Title>
          <Card.Text>
            {`${album.artistName} - ${album.primaryGenreName}`}
          </Card.Text>
        </Card.Body>
      </Card>
      <section className="musics-container">
        { musics.map((music) => (
          <MusicCard
            key={music.trackId}
            trackId={music.trackId}
            albumId={music.collectionId}
            albumName={music.collectionName}
            artistName={music.artistName}
            audioUrl={music.previewUrl}
            musicName={music.trackName}
          />
        )) }
      </section>
    </section>
  );
}

AlbumMusics.propTypes = {
  dispatch: PropTypes.func.isRequired,
  album: PropTypes.shape(),
  musics: PropTypes.arrayOf(shape()),
};

AlbumMusics.defaultProps = {
  album: null,
  musics: null,
};

const mapStateToProps = (state) => ({
  album: state.albumReducer.album,
  musics: state.albumReducer.musics,
});

export default connect(mapStateToProps)(AlbumMusics);
