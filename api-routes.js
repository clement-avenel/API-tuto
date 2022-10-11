// Initialize express router
const router = require('express').Router();

// Import controllers
const dataController = require('./controllers/dataController');

// Data routes
router.get('/', dataController.index);

router.get('/name', dataController.getUsersName);

router.get('/insert',dataController.insert )

router.get('/delete',dataController.delete)


// Export API routes
module.exports = router;
