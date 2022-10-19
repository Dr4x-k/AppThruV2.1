const { Router } = require('express');
const accountCtrl = require('../controllers/accountCtrl');

const routes = Router();

routes.get('/', accountCtrl.isAuthenticated, (req, res) => {
    res.render('index', { email:req.email });
});

routes.get('/login', (req, res) => {
    res.render('login', { alert:false,
        email:req.email });
});

routes.get('/signup', (req, res) => {
    res.render('signup', { alert : false, 
        email:req.email });
});

routes.get('/account', accountCtrl.isAuthenticated, (req, res) => {
    res.render('account', { alert:false,
        email:req.email });
});

routes.get('/products', accountCtrl.isAuthenticated, (req, res) => {
    res.render('productos',
    { email:req.email });
});

routes.post('/signup', accountCtrl.regAccount);
routes.post('/account/:idUsuario', accountCtrl.editAccount)
routes.post('/login', accountCtrl.login);
routes.get('/logout', accountCtrl.logout);

module.exports = routes;