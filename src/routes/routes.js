const { Router } = require('express');
const accountCtrl = require('../controllers/accountCtrl');
const employesCtrl = require('../controllers/employesCtrl');
const productsCtrl = require('../controllers/productsCtrl')
const connection = require('../databases/connection');

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

routes.get('/employes', accountCtrl.isAuthenticated, (req, res) => {
    connection.query('SELECT * FROM viewusuarios', (err, results) => {
        if (err) throw err;
        else res.render('employes', { results: results, email:req.email});
    });
});

routes.get('/products', accountCtrl.isAuthenticated, (req, res) => {
    connection.query('SELECT * FROM viewproductos', (err, results) => {
        if (err) throw err;
        else {res.render('products', { results: results, email:req.email }); console.log(results)}
    })
    
});

routes.post('/signup', accountCtrl.regAccount);
routes.post('/account/:idUsuario', accountCtrl.editAccount)
routes.get('/deleteProduct/:idProducto', productsCtrl.delete, (req, res) => {
    res.redirect('/productos');
});

routes.post('/login', accountCtrl.login);
routes.get('/logout', accountCtrl.logout);

module.exports = routes;