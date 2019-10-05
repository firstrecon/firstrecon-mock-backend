var express = require('express');
var router = express.Router();

// TODO At some point we will need users. We're just not there yet.

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
