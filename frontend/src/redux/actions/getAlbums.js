import { GET_ALBUMS } from './types.js';

export default function getAlbums(query) {
  const queryUrl = encodeURI(query).replaceAll('%20', '+');
  const URL = `https://itunes.apple.com/search?entity=album&term=${queryUrl}&attribute=allArtistTerm`;

  return async (dispatch) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      dispatch({
        type: GET_ALBUMS,
        payload: {
          data,
          query,
        },
      });
    } catch (err) {
      global.alert('Erro ao realizar a busca, tente novamente...');
    }
  };
}
