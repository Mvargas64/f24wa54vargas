let value = 0;
let total = 1;

var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/users', (req, res) => {
  value += 2;
  total += value;
  res.send(`Total is: ${total}`);
});

module.exports = router;
