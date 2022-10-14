const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('hola');
})

module.exports = routes;