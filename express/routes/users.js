var express = require('express');

import { sqlQuery, sqlQueryWithData } from '../public/javascript/localMySQL';

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', async function(req, res) {
  const query = `
    INSERT INTO Users_Basic_Information (username, email, password, created_at, updated_at)
    VALUES (?, ?, ?, NOW(), NOW())
  `;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  // console.log(sqlQueryWithData(query, [username, email, password]));
  console.log(sqlQuery('SELECT * FROM Users_Basic_Information'));
});

module.exports = router;
