// Initialize express router
const router = require('express').Router();

// Import controllers
const dataController = require('./controllers/dataController');

// Data routes
router.get('/', dataController.index);
router.get('/phones', dataController.getUsersPhonesNumbers);

// Export API routes
module.exports = router;
