const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
const routes = require('./routes/dashRoutes');

app.use('/', routes);

//rutas estaticas
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views/'));

//configuracion del servidor
app.set('port', 3000);
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));

//Inicializacion del servidor
app.listen(app.get('port', () => {
    console.log('Servidor funcionando...');
}))

module.exports = app;