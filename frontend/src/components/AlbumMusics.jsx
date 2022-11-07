import PropTypes, { shape } from 'prop-types';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import getAlbumMusics from '../redux/actions/getAlbumMusics';
import Loading from './Loading.jsx';
import MusicCard from './MusicCard.jsx';

function AlbumMusics({ dispatch, album, musics }) {
  const { albumId } = useParams();

  useEffect(() => {
    dispatch(getAlbumMusics(Number(albumId)));
  }, []);

  if (!album || !musics) return <Loading />;

  const qualityImg = album.artworkUrl100.replace(/100x100/gi, () => '500x500');

  return (
    <section>
      <Card border="success" style={{ width: '400px' }}>
        <Card.Img variant="top" src={qualityImg} />
        <Card.Body>
          <Card.Title>{album.collectionName}</Card.Title>
          <Card.Text>
            {`${album.artistName} - ${album.primaryGenreName}`}
          </Card.Text>
        </Card.Body>
      </Card>
      <section>
        { musics.map((music) => (
          <MusicCard
            key={music.trackId}
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
