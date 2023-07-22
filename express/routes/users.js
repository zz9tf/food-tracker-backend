var express = require('express');

import { sqlQuery, sqlQueryWithData } from '../public/javascript/localMySQL';

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', async function(req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  
  // search if the user is already registered
  let [ result ] = await sqlQuery(
    `SELECT COUNT(*) AS count FROM Users_Basic_Information WHERE username = ?`,
    username
  );
  console.log(result);
  if (result.count !== 0) {
    return res.status(400).send({message: 'Username already registered!'});
  }

  [ result ] = await sqlQuery(
    `SELECT COUNT(*) AS count FROM Users_Basic_Information WHERE email = ?`,
    email
  );
  console.log(result);

  if (result.count !== 0) {
    return res.status(400).send({message: 'Email already registered!'});
  }

  sqlQuery(
    `INSERT INTO Users_Basic_Information (username, email, password, created_at, updated_at)
      VALUES (?, ?, ?, NOW(), NOW())`, 
    [username, email, password]
  );
  result = await sqlQuery(`SELECT * FROM Users_Basic_Information`, null);
  return res.json(result);
});

module.exports = router;
