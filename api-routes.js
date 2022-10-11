// Initialize express router
const router = require('express').Router();

const { response } = require('express');
// Import controllers
const dataController = require('./controllers/dataController');

// Data routes
router.get('/', dataController.index);
router.get('/userByName/:name', dataController.getUserByName);

// Export API routes
module.exports = router;
