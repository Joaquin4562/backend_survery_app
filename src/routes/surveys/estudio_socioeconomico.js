const router = require('express').Router();
const getConnection = require('../../../config');
router.post('/new', (request, response) => {
    connection = getConnection();
    connection.connect(err => {
        if (err) {
            console.log(err);
            response.status(200).json({ error: true, message: 'coul not connect to DB' });
        }
    });
    const {
        // info hogar
        ingreso_mensual,
        tipo_vivienda,
        material_vivienda,
        gastos_mensuales,
        cubre_gastos,
        dinero_padres,
        id_ficha_identificacion,
        lista_familiares
    } = request.body;

    let sql = `SET @msg = ''; CALL SP_estudio_socioeconomico(?, ?, ?, ?, ?, ?, ?, @msg);
                SELECT @msg`;
    const values = [
        ingreso_mensual,
        tipo_vivienda,
        material_vivienda,
        gastos_mensuales,
        cubre_gastos,
        dinero_padres,
        id_ficha_identificacion
    ];
    connection.query(sql, values, async (error, result) => {
        if (error) {
            response.status(200).json({ error: true, message: error.message });
        } else {
            sql = `INSERT INTO info_familia 
                    (id_ficha_identificacion, parentesco, edad, telefono, nombre, grado_academico)
                VALUES
                    (?, ?, ?, ?, ?, ?)`;
            var cont = 0;
            do {
                await new Promise(async(resolve) => {
                    await connection.query(sql,
                        [id_ficha_identificacion,
                            lista_familiares[cont].parentesco,
                            lista_familiares[cont].edad,
                            lista_familiares[cont].telefono,
                            lista_familiares[cont].nombre,
                            lista_familiares[cont].grado_academico
                        ], (error, _) => {
                            if (error) return response.status(200).json({ error: true, message: error.message });
                            resolve();
                        });
                }).then(() => {
                    cont++;
                });
            } while (cont != lista_familiares.length);
            response.status(200).json({error: false, message: 'encuesta contestada'});
            connection.end();
        }
    });
});

module.exports = router;