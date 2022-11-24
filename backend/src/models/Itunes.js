import axios from 'axios';

export const getMusics = async (albumId) => {
  const response = await axios.get(`https://itunes.apple.com/lookup?id=${albumId}&entity=song`);
  const album = response.data.results[0];
  const musics = response.data.results.filter((elem) => elem.wrapperType === 'track');
  return { album, musics };
};

export const getAlbums = async (queryUrl) => {
  const response = await axios.get(`https://itunes.apple.com/search?entity=album&term=${queryUrl}&attribute=allArtistTerm`);
  return response.data;
};
