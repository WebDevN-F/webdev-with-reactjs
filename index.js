const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const cartRoute = require('./routes/cart');
const checkoutRoute = require('./routes/stripe');

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
    origin: process.env.CLIENT_URL ? process.env.CLIENT_URL.split(', ') : ['http://localhost:3000'],
    credentials: true, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    exposedHeaders: 'web-auth-token', 
    allowedHeaders: 'web-auth-token, Content-Type', 
    maxAge: '3600',
    optionsSuccessStatus: 200,
}));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRoute);
app.use('/api/checkout', checkoutRoute);

app.use('/', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(process.env.PORT || 5000, () => {
    console.log('Ecommecer API Server running on port', process.env.PORT);
})
