const { Router } = require('express');
const accountController = require('../controllers/accountController');

const routes = Router();

routes.get('/', accountController.isAuthenticated, (req, res) => {
    res.render('index', { email:req.email });
});

routes.get('/login', (req, res) => {
    res.render('login', { alert:false });
});

routes.get('/signup', (req, res) => {
    res.render('signup', { alert:false });
});

routes.get('/account', (req, res) => {
    res.render('accountSettings');
});

routes.get('/products', (req, res) => {
    res.render('products');
});

routes.post('/signup', accountController.regData);
routes.post('/login', accountController.login);
routes.get('/logout', accountController.logout);

module.exports = routes;