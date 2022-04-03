const PORT = 8000;
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const axios = require('axios');

const bodyParser = require('body-parser');

const TOKEN = process.env.ADMIN_USER_TOKEN || 'token';
const baseURL = process.env.BASE_API || 'http://localhost:5000';

console.log(TOKEN, baseURL);

const app = express();

app.use(cors());
app.use(bodyParser.json());

// endpoint to collections task
const newCollection = '/api/rest/v2/namespaces/tickets/collections';
const collectionTask = '/api/rest/v2/namespaces/tickets/collections/task';

const createRequest = axios.create({  
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Cassandra-Token': TOKEN
  },
  timeout: 1000
})

// add controllers
/**
 * 
 */
app.post(`/api/v1/tickets`, async (req, res) => {

  const { data } = req.body;

  try {
    var response = await createRequest.post(`${collectionTask}`, data);
    res.status(200).send(response.data);

  } catch (error) {
    res.status(500).send({'err': error});
  }
})

app.get('/api/v1/tickets', async (req, res) => {
  try {
    var response = await createRequest.get(`${collectionTask}?page-size=20`);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({'err': error});
  }
})

app.get('/api/v1/tickets/:id', async (req, res) => {
  try {
    var response = await createRequest.get(`${collectionTask}/${req.params.id}`);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({'err': error});
  }
})

app.delete('/api/v1/tickets/:id', async (req, res) => {
  try {
    var response = await createRequest.delete(`${collectionTask}/${req.params.id}`);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({'err': error});
  }
})

app.put('/api/v1/tickets/:id', async (req, res) => {
  try {
    var response = await createRequest.put(`${collectionTask}/${req.params.id}`, req.body.data);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({'err': error});
  }
})

// running server
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
