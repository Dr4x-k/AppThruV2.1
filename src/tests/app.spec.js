const app = require('../app.js');
const req = require('supertest');

describe('Test de servidor', () => {
    test('Status 200 from /login', async () => { 
        const res = await req(app).get('/login').send();
        // console.log(res);
        expect(res.statusCode).toBe(200);
    });
    test('Status 200 from /signup', async () => { 
        const res = await req(app).get('/signup').send();
        // console.log(res);
        expect(res.statusCode).toBe(200);
    });
});