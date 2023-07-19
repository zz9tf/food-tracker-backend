import express from 'express';
import { MySQLConnection } from '../public/javascript/localMySQL';

var router = express.Router();

require('dotenv').config();

/* GET home page. */
router.get('/', async (req, res) => {
  res.send('Welcome!');
});


module.exports = router;
