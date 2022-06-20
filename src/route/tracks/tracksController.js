const connexion = require('../../../db-config');
const db = connexion.promise();

const getOne = (req, res) => {
  res.status(200).send('Get One route is OK');
};

const getAll = (req, res) => {
  res.status(200).send('Get All route is OK');
};

const postTracks = (req, res) => {
  res.status(200).send('Post route is OK');
};

const updateTracks = (req, res) => {
  res.status(200).send('Update route is OK');
};

const deleteTracks = (req, res) => {
  res.status(200).send('Delete route is OK');
};

module.exports = { getOne, getAll, postTracks, updateTracks, deleteTracks };
