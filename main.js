const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.json());

app.use('/api/users', require('./routes/user'));

app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT || 5000, () => {
    console.log('Ecommecer API Server running on port', process.env.PORT);
})