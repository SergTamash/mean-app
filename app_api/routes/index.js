var express = require('express');
var router = express.Router();
const ctrlAuth = require('../controllers/authentication');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("req");
  res.send('cool')
});

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
