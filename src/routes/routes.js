const { Router } = require('express');
const accountCtrl = require('../controllers/accountCtrl');
const employesCtrl = require('../controllers/employesCtrl');
const productsCtrl = require('../controllers/productsCtrl')
const connection = require('../databases/connection');

const route = Router();

route.get('/', accountCtrl.isAuthenticated, (req, res) => {
    res.render('index', { email:req.email });
});

route.get('/login', (req, res) => {
    res.render('login', { alert:false,
        email:req.email });
});

route.get('/signup', (req, res) => {
    res.render('signup', { alert : false, 
        email:req.email });
});

route.get('/account', accountCtrl.isAuthenticated, (req, res) => {
    res.render('account', { alert:false,
        email:req.email });
});

route.get('/employes', accountCtrl.isAuthenticated, (req, res) => {
    connection.query('SELECT * FROM viewusuarios', (err, results) => {
        if (err) throw err;
        else res.render('employes', { results: results, email:req.email});
    });
});

route.get('/products', accountCtrl.isAuthenticated, (req, res) => {
    connection.query('SELECT * FROM viewproductos', (err, results) => {
        if (err) throw err;
        else {res.render('products', { results: results, email:req.email }); console.log(results)}
    })
    
});

route.get('/update/:idProducto', accountCtrl.isAuthenticated, (req, res) => {
    res.render('editProduct', {alert:false, email:req.email})
})

route.post('/signup', accountCtrl.regAccount);
route.post('/account/:idUsuario', accountCtrl.editAccount)
route.get('/deleteProduct/:idProducto', productsCtrl.delete);

route.post('/login', accountCtrl.login);
route.get('/logout', accountCtrl.logout);

route.post('/update/:idProducto', accountCtrl.editAccount);
route.post('/products', productsCtrl.addProduct);

module.exports = route;