const PORT = 8000;
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const axios = require('axios');

const bodyParser = require('body-parser');

const TOKEN = process.env.ADMIN_USER_TOKEN || 'token';

console.log(process.env.ADMIN_USER_TOKEN)

const app = express();

app.use(cors());
app.use(bodyParser.json());

// add controllers

const baseURL = 'https://dfef2532-d4c1-454f-9bed-74a05f5d8f3a-europe-west1.apps.astra.datastax.com';
const newCollection = '/api/rest/v2/namespaces/tickets/collections';
const newTask = '/api/rest/v2/namespaces/tickets/collections/task';

/**
 * 
 */
app.post(`/api/v1/tickets`, async (req, res) => {

  const { formData } = req.body;
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Cassandra-Token': TOKEN
    },
  }

  try {
    var response = await axios.post(`${baseURL}${newTask}`, formData, options);
    res.send(response.data);

  } catch (error) {
    res.status(500).send({'err': error});
  }
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
