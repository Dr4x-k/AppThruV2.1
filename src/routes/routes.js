const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    res.render('index');
});

routes.get('/login', (req, res) => {
    res.render('login');
});

routes.get('/signup', (req, res) => {
    res.render('signup');
});

routes.get('/account', (req, res) => {
    res.render('accountSettings');
});

module.exports = routes;