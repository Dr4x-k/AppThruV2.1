const connection = require('../databases/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const accountController = {}

accountController.data = (req, res) => {
    connection.query('SELECT * FROM usuario', (err, results) => {
        if (err) res.json(err);
        res.render('signup', {alert : false})
    });
}

accountController.regData = async (req, res) => {
    try {
        const nombres = '';
        const apellidoPaterno = '';
        const apellidoMaterno = '';
        const email = req.body.email;
        const usuario = req.body.user;
        const contrasena = req.body.psw;
        let passHash = await bcrypt.hash(contrasena, 8);
        const fk_rol = 3;

        connection.query('INSERT INTO usuario SET ?', { nombres, apellidoPaterno, apellidoMaterno, email, usuario, contrasena : passHash, fk_rol }, (err, results) => {
            if (err) {
                res.render('signup', {
                    alert: true,
                    alertMessage: 'Email y/o usuario existentes'
                });
                // res.json(err);
                // throw err;
            }
            res.redirect('/')
        });
    } catch (error) {
        console.log(error);
    }
    
}

accountController.login = async (req, res) => {
    try {
        const email = req.body.email;
        const contrasena = req.body.pwd;
        connection.query('SELECT * FROM usuario WHERE email = ?', [email], async (err, results) => {
            if (results.length == 0 || !(await bcrypt.compare(contrasena, results[0].contrasena))) {
                res.render('login', {
                    alert: true,
                    alertTitle: 'Error',
                    alertMessage: 'Email y/o contraseña incorrectas',
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                });
            } else { //Inicio de sesion correcto
                const idUsuario = results[0].idUsuario
                // Token con tiempo de expiracion
                const token = jwt.sign({idUsuario:idUsuario}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRATION_TIME
                })
                // Token sin tiempo de expiracion
                // const token = jwt.sign({idUsuario:idUsuario}, process.env.JWT_SECRET); 
                console.log(token)
                const cookieOptions = {
                    expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions)
                res.render('login', {
                    alert: true,
                    alertTitle: 'Conexion exitosa',
                    alertMessage: 'Inicio de Sesion correcto!',
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer: 800,
                    ruta: ''
                });
            }
        });
    } catch (error) {
        console.log(error);   
    }
}

accountController.isAuthenticated = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            const decod = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
            connection.query('SELECT * FROM usuario WHERE idUsuario = ?', [decod.idUsuario], (err, results) => {
                if (!results) {return next();}
                req.email = results[0];
                return next();
            });
        } catch (error) {
            console.log(error);
            return next();
        }
    } else {
        res.redirect('/login');
    }
}

accountController.logout = (req, res) => {
    res.clearCookie('jwt');
    return res.redirect('/');
}

module.exports = accountController;