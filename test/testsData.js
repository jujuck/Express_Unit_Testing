const albumKeys = ['id', 'title', 'genre', 'picture', 'artist'];
const trackKeys = ['id', 'title', 'youtube_url', 'id_album'];

const albumToCreate = {
  title: 'The Dark Side of the Moon',
  genre: 'Rock',
  picture:
    'https://images-na.ssl-images-amazon.com/images/I/41QfcId32%2BL._SY355_.jpg',
  artist: 'Pink Floyd',
};

const trackToCreate = {
  title: 'Another Brick In The Wall',
  youtube_url: 'https://www.youtube.com/watch?v=YR5ApYxkU-U',
  id_album: 2,
};

module.exports = {
  albumKeys,
  trackKeys,
  albumToCreate,
  trackToCreate,
};
