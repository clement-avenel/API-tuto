// Initialize express router
const router = require('express').Router();

// Import controllers
const dataController = require('./controllers/dataController');
// Data routes
router.get('/', dataController.index);
router.get('/get_people_number', dataController.get_people_number)
// Export API routes
module.exports = router;
