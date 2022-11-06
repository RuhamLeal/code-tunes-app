import { GET_ALBUM_MUSICS } from './types.js';

export default function getAlbumMusics(albumId) {
  const URL = `https://itunes.apple.com/lookup?id=${albumId}&entity=song`;

  return async (dispatch) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const album = data.results[0];
      const musics = data.results.filter((elem) => elem.wrapperType === 'track');
      dispatch({
        type: GET_ALBUM_MUSICS,
        payload: {
          album,
          musics,
        },
      });
    } catch (err) {
      global.alert('Erro ao consultar o album, tente novamente...');
    }
  };
}
