const express = require('express');
const app = express();

//Connexion MongoDB
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://CamillePugeaut:KItchy1702@groupomania.ziye4zb.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch(() => console.log('Connexion à MongoDB échouée'));
