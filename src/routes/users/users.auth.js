const router = require('express').Router();
const getConnection = require('../../../config');

router.post('/sign-in', (request, response) => {
    connection = getConnection();
    connection.connect(err => {
        if (err) {
            console.log(err);
            response.status(200).json({ error: true, message: 'coul not connect to DB' });
        }
    });
    const { username, password } = request.body;
    const sql = `SELECT usuario, contrasena, rol, id_usuarios FROM usuarios WHERE usuario = ?`;
    connection.query(sql, username, (error, result) => {
        if (error) response.status(200).json({ error: true, message: error.message });
        if (!result[0]) {
            response.status(200).json({ error: true, message: 'username not exist' });
        } else {
            const pass = result[0].contrasena;
            if (pass === password) {
                response.status(200).json({ error: false, message: 'autenticacion correcta', data: { usuario: result[0].usuario, rol: result[0].rol, id_usaurios: result[0].id_usuarios } });
            } else {
                response.status(200).json({ error: true, message: 'password or username incorrect' });
            }
        }
    });
    connection.end();
});

router.post('/sign-up', (request, response) => {
    connection = getConnection();
    connection.connect(err => {
        if (err) {
            console.log(err);
            response.status(200).json({ error: true, message: 'coul not connect to DB' });
        }
    });
    const sql = `INSERT into usuarios (usuario, contrasena) VALUES (?, ?)`;
    const { username, password } = request.body;
    connection.query(sql, [username, password], (error) => {
        if (error) response.status(200).json({ error: true, message: error.message });
        response.status(200).json({ error: false, message: 'user registrated' });
    });
    connection.end();
});

module.exports = router;