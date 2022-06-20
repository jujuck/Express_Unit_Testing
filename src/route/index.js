const { Router } = require('express');

const tracks = require('./tracks/tracksController');
const albums = require('./albums/albumsController');

const router = Router();

router.get('/albums', albums.getAll);
router.get('/albums/:id', albums.getOne);
router.get('/albums/:id/tracks', albums.getTracksByAlbumId);
router.post('/albums', albums.postAlbums);
router.put('/albums/:id', albums.updateAlbums);
router.delete('/albums/:id', albums.deleteAlbums);

router.get('/tracks', tracks.getAll);
router.get('/tracks/:id', tracks.getOne);
router.post('/tracks', tracks.postTracks);
router.put('/tracks/:id', tracks.updateTracks);
router.delete('/tracks/:id', tracks.deleteTracks);

module.exports = router;
