// Initialize express router
const router = require('express').Router();

// Import controllers
const dataController = require('./controllers/dataController');

// Data routes
router.get('/', dataController.index);

router.get('/phoneNumbers',dataController.getPhoneNumbers);

// Export API routes
module.exports = router;
