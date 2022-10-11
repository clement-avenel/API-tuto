// Initialize express router
const router = require('express').Router();

// Import controllers
const dataController = require('./controllers/dataController');

// Data routes
router.get('/GetPeople', dataController.GetPeople);

router.get('/GetAge', dataController.GetAge);

router.get('/InsertPeople', dataController.InsertPeople);

router.get('/DeletePeople', dataController.DeletePeople);


// Export API routes
module.exports = router;
