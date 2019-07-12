var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
})

const ctrlAuth = require('../controllers/authentication');
const ctrlEvents = require('../controllers/events');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("req");
  res.send('cool')
});

// events
router
  .route('/events')
  .get(ctrlEvents.getEventsList)
  .post(ctrlEvents.createEvent);

router
  .route('/events/:eventId')
  .get(ctrlEvents.getEventById)
  .put(auth, ctrlEvents.updateEvent)
  .delete(auth, ctrlEvents.deleteEvent);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
