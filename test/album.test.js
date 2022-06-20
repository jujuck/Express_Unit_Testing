const supertest = require('supertest');

const app = require('../src/app');
const { albumToCreate, albumKeys, trackKeys } = require('./testsData');

describe('🎧 ALBUMS ROUTES', () => {
  const persistentDatas = {};

  it('should get the albums list 🧪 /api/albums', async () => {
    const res = await supertest(app)
      .get('/api/albums')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((album) => {
      albumKeys.map((prop) => {
        expect(album).toHaveProperty(prop);
      });
    });
  });

  it('should get the track list of album 1 🧪 /api/albums/1/tracks', async () => {
    const res = await supertest(app)
      .get('/api/albums/1/tracks')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((track) => {
      expect(track).toHaveProperty('id_album', 1);
      trackKeys.map((prop) => {
        expect(track).toHaveProperty(prop);
      });
    });
  });

  it('should get the album with id 1 🧪 /api/albums/1', async () => {
    const res = await supertest(app)
      .get('/api/albums/1')
      .expect(200)
      .expect('Content-Type', /json/);

    albumKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
  });

  it('should create a new album 🧪 /api/albums', async () => {
    const res = await supertest(app)
      .post('/api/albums')
      .send(albumToCreate)
      .expect(201)
      .expect('Content-Type', /json/);

    albumKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
    persistentDatas.createdAlbum = res.body;
  });

  it(`should update the created album title 🧪 /api/albums/`, async () => {
    await supertest(app)
      .put(`/api/albums/${persistentDatas.createdAlbum.id}`)
      .send({
        title: 'The Light Side of the Sun',
      })
      .expect(204);

    const res = await supertest(app).get(
      `/api/albums/${persistentDatas.createdAlbum.id}`
    );

    expect(res.body).toHaveProperty('title', 'The Light Side of the Sun');
  });

  it(`should delete the created album 🧪 /api/albums/4`, async () => {
    await supertest(app)
      .delete(`/api/albums/${persistentDatas.createdAlbum.id}`)
      .expect(204);

    await supertest(app)
      .get(`/api/albums/${persistentDatas.createdAlbum.id}`)
      .expect(404);
  });
});
