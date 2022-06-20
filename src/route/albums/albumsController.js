const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  res.status(200).send('Get All route is OK');
};

const getOne = (req, res) => {
  res.status(200).send('Get One route is OK');
};

const getTracksByAlbumId = (req, res) => {
  res.status(200).send('Get Albums route is OK');
};

const postAlbums = (req, res) => {
  res.status(200).send('Post route is OK');
};

const updateAlbums = (req, res) => {
  res.status(200).send('Update route is OK');
};

const deleteAlbums = (req, res) => {
  res.status(200).send('Delete route is Ok');
};

module.exports = {
  getAll,
  getOne,
  getTracksByAlbumId,
  postAlbums,
  updateAlbums,
  deleteAlbums,
};
