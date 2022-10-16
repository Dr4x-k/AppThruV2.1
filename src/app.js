const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: path.join(__dirname, './.env') });
const routes = require('./routes/routes');
const connection = require('./databases/connection');

const app = express();

// settings (3)
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares (3)
app.use(morgan('dev'));
app.use(express.urlencoded( { extended : false } ));
app.use(express.json());

// static routes (1)
app.use(express.static('src/public'));

// routes (1)
app.use('/', routes);

// Cookies
app.use(cookieParser());

app.listen(app.get('port'), () => {
    console.log('servidor funcionando en el puerto', app.get('port'))
});

module.exports = app;