const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const apiRoutes = require('./api-routes');

const app = express();

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

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

module.exports = app;
