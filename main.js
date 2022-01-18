const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    exposedHeaders: 'web-auth-token', 
    allowedHeaders: 'web-auth-token, Content-Type', 
    maxAge: '3600',
    optionsSuccessStatus: 200,
}));
app.use(bodyParser.json());

app.use('/api/users', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/product'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/order', require('./routes/order'));
app.use('/api/checkout', require('./routes/stripe'));

app.listen(process.env.PORT || 5000, () => {
    console.log('Ecommecer API Server running on port', process.env.PORT);
})