var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    greeting: "Welcome to the First ReCon Scouting API"
  });
});

module.exports = router;
