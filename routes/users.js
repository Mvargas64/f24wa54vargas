const express = require('express');
const router = express.Router();

let value = 0;
let total = 1;

router.get('/', (req, res) => {
    value += 2;
    total += value;
    res.send(`Total is: ${total}`);
});

module.exports = router;
