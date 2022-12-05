const connection = require('../databases/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const accountCtrl = {}

accountCtrl.data = (req, res) => {
    const email = req.body.email;
    connection.query(`SELECT * FROM viewusuarios WHERE email = ?`, [email], (err, results) => {
        // console.log(results)
        if (err) res.json(err);
        res.render('account', { alert : false })
    });
}

accountCtrl.regAccount = async (req, res) => {
    try {
        const nombres = '', apellidoPaterno = '', apellidoMaterno = '';
        const email = req.body.email, usuario = req.body.user;
        const contrasena = req.body.psw;
        let passHash = await bcrypt.hash(contrasena, 8);
        const fk_rol = 3;
        let query = `SELECT email FROM usuario WHERE idUsuario = '${email}' OR usuario = '${usuario}'`;
        connection.query(query, (err, results) => {
            // console.log(results)
            if (results.length == 0) {
                // `Call insert_usuario (${nombres},${apellidoPaterno},${apellidoMaterno},${email},${usuario},${passHash},${fk_rol})`
                connection.query('INSERT INTO usuario SET ?', { nombres, apellidoPaterno, apellidoMaterno, email, usuario, contrasena : passHash, fk_rol }, (err, results) => {
                    res.redirect('/login')
                });
                // console.log('email no encontrado')
            } else {
                // console.log('email encontrado');
                res.render('signup', {
                    alert: true,
                    alertMessage: 'Email y/o usuario existentes'
                });
            }
            
        });
    } catch (error) {
        console.log(error);
    }
    
}

accountCtrl.editAccount = async (req, res) => {
    try {
        const idUsuario = req.body.idUsuario;
        const nombres = req.body.nombres, apellidoPaterno = req.body.apellidoPaterno, apellidoMaterno = req.body.apellidoMaterno;
        const email = req.body.email, usuario = req.body.usuario;
        const contrasena = req.body.contrasena;
        let passHash;
        // const fk_rol = 3;
        
        connection.query(`SELECT * FROM usuario WHERE idUsuario = ${idUsuario}`, async (err, results) => {
            // console.log(results[0]);
            // spread operator - check letter
            let vari = results[0];
            let clone = {...vari}
            clone = {...clone, ...req.body}
            if (clone.contrasena == '') {
                clone.contrasena = vari.contrasena;
                passHash = vari.contrasena;
            } else {
                passHash = await bcrypt.hash(contrasena, 8);
            }
            // console.log(clone)
            connection.query(`UPDATE usuario SET ? WHERE idUsuario = ${idUsuario}`, { nombres, apellidoPaterno, apellidoMaterno, email, usuario, contrasena:passHash }, async (err, results) => {
                
                if (err) {
                    throw err;
                } else {
                    // console.log('hecho')
                    res.redirect('/account')
                }
            })
        });
        } catch (error) {
            
    }
}

accountCtrl.login = async (req, res) => {
    try {
        const email = req.body.email;
        const contrasena = req.body.pwd;
        connection.query('SELECT * FROM usuario WHERE email = ? OR usuario = ?', [email, email], async (err, results) => {
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
                // console.log(token)
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

accountCtrl.isAuthenticated = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            const decod = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
            connection.query('SELECT * FROM viewusuarios WHERE idUsuario = ?', [decod.idUsuario], (err, results) => {
                if (!results) { return next(); }
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

accountCtrl.logout = (req, res) => {
    res.clearCookie('jwt');
    return res.redirect('/');
}

module.exports = accountCtrl;