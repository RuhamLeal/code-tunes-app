import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function AlbumCard({
  img, albumName, artistName, albumGenre,
}) {
  const qualityImg = img.replace(/100x100/gi, () => '500x500');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={qualityImg} />
      <Card.Body>
        <Card.Title>{albumName}</Card.Title>
        <Card.Text>
          {`${artistName} - ${albumGenre}`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

AlbumCard.propTypes = {
  img: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  albumGenre: PropTypes.string.isRequired,
};

export default AlbumCard;
