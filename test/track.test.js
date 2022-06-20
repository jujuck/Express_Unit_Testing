const supertest = require('supertest');
const app = require('../src/app');
const { trackToCreate, trackKeys } = require('./testsData');

describe('🎧 TRACKS ROUTES', () => {
  const persistentDatas = {};

  it('should get the track list 🧪 /api/tracks', async () => {
    const res = await supertest(app)
      .get('/api/tracks')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((track) => {
      trackKeys.map((prop) => {
        expect(track).toHaveProperty(prop);
      });
    });
  });

  it('should get the track with id 1 🧪 /api/tracks/1', async () => {
    const res = await supertest(app)
      .get('/api/tracks/1')
      .expect(200)
      .expect('Content-Type', /json/);

    trackKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
  });

  it('should create a new track 🧪 /api/tracks', async () => {
    const res = await supertest(app)
      .post('/api/tracks')
      .send(trackToCreate)
      .expect(201)
      .expect('Content-Type', /json/);

    trackKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
    persistentDatas.createdTrack = res.body;
  });

  it(`should update the created track title 🧪 /api/tracks/`, async () => {
    await supertest(app)
      .put(`/api/tracks/${persistentDatas.createdTrack.id}`)
      .send({
        title: 'Bohemian Rhapsody',
      })
      .expect(204);

    const res = await supertest(app).get(
      `/api/tracks/${persistentDatas.createdTrack.id}`
    );

    expect(res.body).toHaveProperty('title', 'Bohemian Rhapsody');
  });

  it(`should delete the created album 🧪 /api/tracks/`, async () => {
    await supertest(app)
      .delete(`/api/tracks/${persistentDatas.createdTrack.id}`)
      .expect(204);

    await supertest(app)
      .get(`/api/tracks/${persistentDatas.createdTrack.id}`)
      .expect(404);
  });
});
