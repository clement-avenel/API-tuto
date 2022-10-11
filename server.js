const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var fs = require('fs');

// Import routes
const apiRoutes = require('./api-routes');

const VIEW_DATA = path.join(__dirname, 'data');

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.enable('trust proxy', 1);

// Setup CORS Options
const corsOptions = {
  origin: [process.env.PROD_URL, 'http://localhost:3000'],
};
// Configure CORS
app.use(cors(corsOptions));

// Use Api routes in the App
app.use('/', apiRoutes);

// Affichage des clients
app.get('/people', function (req, res) {
  fs.readFile(VIEW_DATA + '/stupid.json', 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
});

// Affichage de la route du formulaire
app.get('/people/add', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Traitement du formulaire
app.post('/people/add', urlencodedParser, (req, res) => {
    // On récupère les données du formulaire et on les stocke dans un objet JSON
    var json = JSON.stringify(req.body);
    // On écrit dans le fichier json stupid.json les données du formulaire
    fs.writeFile(VIEW_DATA+'/stupid.json', json, 'utf8', (err) => {
        if (err) throw err;
        console.log('Donnée sauvegardée!');
    });
    res.redirect('/people');
});

// Page 404
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

module.exports = app;
