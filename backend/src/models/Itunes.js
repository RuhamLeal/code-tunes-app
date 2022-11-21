import axios from 'axios';

export const getMusics = async (albumId) => {
  const response = await axios.get(`https://itunes.apple.com/lookup?id=${albumId}&entity=song`);
  const data = await response.json();
  const album = data.results[0];
  const musics = data.results.filter((elem) => elem.wrapperType === 'track');
  return { album, musics };
};

export const getAlbums = async (queryUrl) => {
  const response = await axios.get(`https://itunes.apple.com/search?entity=album&term=${queryUrl}&attribute=allArtistTerm`);
  const data = await response.json();
  return data;
};
