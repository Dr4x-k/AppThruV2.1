    const connection = require('../databases/connection');
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const { promisify } = require('util');

    productsCtrl = {}

    productsCtrl.addProduct = (req, res) => {
        // console.log(req.body);
        try {
            // const { data } = req.body;
            const { nombreProducto, descripcion, stock, precio, fk_idCategoria, fk_idProveedor } = req.body;
            parseInt(stock);
            parseInt(precio);
            parseInt(fk_idCategoria);
            parseInt(fk_idProveedor);
            var precioUnitario = (precio * 0.16);
            
            connection.query(`INSERT INTO productos (nombreProducto, descripcion, stock, precio, precioUnitario, fk_idCategoria, fk_idProveedor) VALUES ('${nombreProducto}', '${descripcion}', ${stock}, ${precio}, ${precioUnitario}, ${fk_idCategoria}, ${fk_idProveedor})`, (err, results) => {
                if (err) res.json(err);
            });
        } catch (error) {
            // console.log(error);
        }
    }

    productsCtrl.delete = (req, res) => {
        const idProducto = req.params.idProducto;
        connection.query('delete from productos where idProducto = ?', [idProducto], (err, results) => {
            if (err) res.json(err);
            res.redirect('/products')
        })
    }

    module.exports = productsCtrl;