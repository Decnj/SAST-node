#Import Supertest and Express
const request = require('supertest');
const express = require('express');

#Create express instance
const app = express();

#Define routes
app.get('/', (req, res) => res.send('Express server works!!!"));

#Simulates GET request to root path and expected response from Express app
test('GET / returns Express server works!!', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Express server works!!!');
});
