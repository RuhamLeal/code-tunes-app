import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function AlbumCard({
  img, albumName, artistName, albumGenre, id,
}) {
  const qualityImg = img.replace(/100x100/gi, () => '500x500');

  return (
    <Link to={`/album/${id}`}>
      <Card style={{ width: '300px' }}>
        <Card.Img variant="top" src={qualityImg} />
        <Card.Body>
          <Card.Title>{albumName}</Card.Title>
          <Card.Text>
            {`${artistName} - ${albumGenre}`}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

AlbumCard.propTypes = {
  img: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  albumGenre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default AlbumCard;
