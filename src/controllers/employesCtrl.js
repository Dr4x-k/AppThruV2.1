const { json } = require('body-parser');
const connection = require('../databases/connection');

const employesCtrl = {}

employesCtrl.Data = (req, res) => {
    connection.query(`SELECT * FROM viewusuarios`, (err, results) => {
        if (err) res.json(err);
        else res.render('employes', {data:results});
    });
}

employesCtrl.DataTable = (req, res) => {
    connection.query('SELECT * FROM usuario', (err, results) => {
        if (err) res.json(err);
        else data = JSON.stringify(results);
    });
}

module.exports = employesCtrl;