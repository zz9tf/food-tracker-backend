import express from 'express';

var router = express.Router();

require('dotenv').config();

/* GET home page. */
router.get('/', async (req, res) => {
  res.send('Welcome!');
});

module.exports = router;
