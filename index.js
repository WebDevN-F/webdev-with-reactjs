const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Webdev Shop Service',
            version: '1.0.0',
            contact: {
                name: 'Nguyen Van Nam',
                url: 'https://github.com/WebDevN-F/webdev-with-reactjs/tree/ecommerce-api',
            },
        },
        servers: [
            {
                url: process.env.SERVER_URL,
                description: 'Webdev SHOP API SERVER',
            },
        ],
    },
    apis: ['./routes/*.js'], // files containing annotations as above
    
};
const openapiSpecification = swaggerJsdoc(options);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log(`MongoDB Connected webdevecommercedb ${process.env.MONGO_URL}...`))
    .catch(err => console.log(err));

app.use(bodyParser.json());

app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    exposedHeaders: 'web-auth-token', 
    allowedHeaders: 'web-auth-token, Content-Type', 
    maxAge: '3600',
    optionsSuccessStatus: 200,
}));

app.use('/api/users', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/product'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/order', require('./routes/order'));
app.use('/api/checkout', require('./routes/stripe'));

app.use('/', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(process.env.PORT || 5000, () => {
    console.log('Ecommecer API Server running on port', process.env.PORT);
})