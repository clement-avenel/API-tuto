// Initialize express router
const router = require('express').Router();

// Import controllers
const dataController = require('./controllers/dataController');
// Data routes
router.get('/', dataController.index);
router.get('/people_number', dataController.people_number)
// Export API routes
module.exports = router;
