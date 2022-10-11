// Initialize express router
const router = require('express').Router();

// Import controllers
const dataController = require('./controllers/dataController');

// Data routes
router.get('/', dataController.index);

// Only phones numbers
router.get('/phones', dataController.getOnlyUsersNumbers);

// Export API routes
module.exports = router;
