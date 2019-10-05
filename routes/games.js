const express = require('express');
const router = express.Router();
const { Game } = require('../models');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const games = await Game.findAll()
  res.json({ games });
});

module.exports = router;
