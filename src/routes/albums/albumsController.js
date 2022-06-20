const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = (req, res) => {
  db.query('SELECT * FROM albums')
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
};

const getOne = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM albums WHERE id = ?', [id])
    .then((result) => {
      if (result[0][0]) {
        res.status(200).json(result[0][0]);
      } else {
        res.status(404).send('Not Found');
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

const getTracksByAlbumId = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM track WHERE id_album = ?', [id])
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
};

const postAlbums = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  db.query(
    'INSERT INTO albums(title, genre, picture, artist) VALUES (?, ?, ?, ?)',
    [title, genre, picture, artist]
  )
    .then((result) =>
      res
        .status(201)
        .json({ title, genre, picture, artist, id: result[0].insertId })
    )
    .catch((err) => {
      res.status(401).send(err);
    });
};

const updateAlbums = (req, res) => {
  const id = req.params.id;
  db.query('UPDATE albums SET ? WHERE id = ?', [req.body, id])
    .then((result) => res.status(204).send('no content'))
    .catch((err) => {
      res.status(401).send(err);
    });
};

const deleteAlbums = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM albums WHERE id = ?', [id])
    .then((album) => {
      if (album[0][0].id) {
        db.query('DELETE FROM albums WHERE id = ?', [id])
          .then((result) => res.status(204).send(result[0]))
          .catch((err) => {
            res.status(404).send(err);
          });
      } else {
        res.status(404).send('Albums not found');
      }
    })
    .catch((err) => {
      res.status(404).send('Albums not found');
    });
};

module.exports = {
  getAll,
  getOne,
  getTracksByAlbumId,
  postAlbums,
  updateAlbums,
  deleteAlbums,
};
