const express = require('express');
const app = require('../app');

router = express.Router();

router.get('/home', (req, res) => {
    res.send('Hola mundo');
});

module.exports = router;