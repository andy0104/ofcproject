import request from "supertest";
import server from '../../server';

it('return a 200 status on success', async() => {
  return request(server)
    .get('/ping')
    .expect(200);
});