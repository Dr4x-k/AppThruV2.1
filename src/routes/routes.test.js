
const routes = require('./routes');

describe('Pruebas de rutas', () => {
    describe('Get /', () => {
        it('la ruta funciona', async () => {
            const res = await request(routes).get('/').send();

            expect(res.status).toBe(200);
            // expect(res.headers['content-type']).toContain();
        });
    });
});