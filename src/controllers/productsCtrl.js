const connection = require('../databases/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

productsCtrl = {}

productsCtrl.delete = (req, res) => {
    const idProducto = req.params.idProducto;
    connection.query('delete from productos where idProducto = ?', [idProducto], (err, results) => {
        if (err) res.json(err);
        // res.render('products', { alert : false })
    })
}

module.exports = productsCtrl;