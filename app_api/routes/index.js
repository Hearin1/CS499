const express = require('express'); // Express app
const router = express.Router(); //router logic

//This is where we import the controllers we will route
const tripsController = require('../controllers/trips');
const usersRouter = require('./users');
const statusRouter = require('./status');

//define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripslist) //GET Method routes tripslist
    .post(tripsController.tripsAddTrip); //POST Method Adds a Trip

//GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip); //PUT Method Updates a Trip

router.use('/users', usersRouter);
router.use('/status', statusRouter);

module.exports = router;
