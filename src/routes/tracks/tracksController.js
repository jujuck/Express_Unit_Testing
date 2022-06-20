const connexion = require('../../../db-config');
const db = connexion.promise();

const getOne = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM track WHERE id = ?', [id])
    .then((result) => {
      if (result[0][0]) {
        res.status(200).json(result[0][0]);
      } else {
        res.status(404).send('Album not Found');
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

const getAll = (req, res) => {
  db.query('SELECT * FROM track')
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
};

const postTracks = (req, res) => {
  const { title, youtube_url, id_album } = req.body;
  db.query(
    'INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)',
    [title, youtube_url, id_album]
  )
    .then((result) => {
      res
        .status(201)
        .json({ title, youtube_url, id_album, id: result[0].insertId });
    })
    .catch((err) => {
      res.status(401).send(err);
    });
};

const updateTracks = (req, res) => {
  const id = req.params.id;
  db.query('UPDATE track SET ? WHERE id = ?', [req.body, id])
    .then((result) => res.status(204).send('no content'))
    .catch((err) => {
      res.status(401).send(err);
    });
};

const deleteTracks = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM track WHERE id = ?', [id])
    .then((track) => {
      if (track[0][0].id) {
        db.query('DELETE FROM track WHERE id = ?', [id])
          .then((result) => res.status(204).send(result[0]))
          .catch((err) => {
            res.status(404).send(err);
          });
      } else {
        res.status(404).send('Tracks not found');
      }
    })
    .catch((err) => res.status(404).send(err));
};

module.exports = { getOne, getAll, postTracks, updateTracks, deleteTracks };
