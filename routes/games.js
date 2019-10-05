const express = require('express');
const router = express.Router();
const { Game } = require('../models');


/* GET games listing. */
router.get('/', async (req, res, next) => {
  const games = await Game.findAll()
  res.json({ games });
});

// GET game by year
router.get('/:year', async (req, res, next) => {
  const game = await Game.findByPk(req.params.year);
  res.json({ game });
});


module.exports = router;
