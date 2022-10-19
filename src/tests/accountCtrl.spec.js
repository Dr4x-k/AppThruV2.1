const accountCtrl = require('../controllers/accountCtrl');
const req = require('supertest');

describe('Test querys', () => {
    test('Test for login success', async done => {
        const res = await req(accountCtrl).post("/login").send({
            email: "admin",
            contrasena: "admin"
        });
        done();
    });

    test('Test for signup', async done => {
        const res = await req(accountCtrl).post("/signup").send({
            nombres: "Jorge",
            apellidoPaterno: "Bernal",
            apellidoMaterno: "Espinoza",
            email: "jorgearturobernalespinoza",
            usuario: "Jorge",
            contrasena: "admin",
            fk_rol: 1
        });
        done();
    });
});