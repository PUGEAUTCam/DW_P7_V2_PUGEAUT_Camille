const express = require('express');
const app = express();

//HELMET
const helmet = require('helmet');
app.use(helmet());
//DOTENV
require('dotenv').config();

//Middleware qui gere les requetes POST venant du front en extrayant le corps JSON
app.use(express.json());


//Import Routes
const userRoutes = require('./routes/user');


//Middleware CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader("Cross-Origin-Resource-Policy", "same-site");
    next();
});

// Load the routes
app.use('/api/auth', userRoutes);

module.exports = app;