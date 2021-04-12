const router = require('express').Router();
const getConnection = require('../../../config');
connection = getConnection();

router.post('/new', (request, response) => {
    connection.connect(err => {
        if (err) {
            console.log(err);
            response.status(200).json({ error: true, message: 'coul not connect to DB' });
        }
    });
    const {
        // info personal
        nombre,
        numero_control,
        facebook,
        semestre,
        correo,
        telefono,
        edad,
        sexo,
        peso,
        estado_civil,
        num_hijos,
        fecha_nacimiento,
        lugar_nacimiento,
        codigo_postal,
        delegacion_mpio,
        calle,
        colonia,
        num_exterior,
        num_interior,
        // info escolar
        institucion_procedencia,
        especialidad,
        promedio,
        becado,
        tipo_beca,
        trabaja,
        direccion_trabajo
    } = request.body;
    const sql = `SET @msg = ''; CALL SP_ficha_identificacion (@msg,
            ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?, 
            ?, ?, ?, ?, ?, 
            ?, ?, ?, ?, ?, ?
        ); SELECT @msg`;
    const values = [
        // info personal
        nombre,
        numero_control,
        facebook,
        semestre,
        correo,
        telefono,
        edad,
        sexo,
        peso,
        estado_civil,
        num_hijos,
        fecha_nacimiento,
        lugar_nacimiento,
        codigo_postal,
        delegacion_mpio,
        calle,
        colonia,
        num_exterior,
        num_interior,
        // info hogar
        // ingreso_mensual,
        // tipo_vivienda,
        // material_vivienda,
        // gastos_mensuales,
        // cubre_gastos,
        // dinero_padres,
        // info escolaridad
        institucion_procedencia,
        especialidad,
        promedio,
        becado,
        tipo_beca,
        trabaja,
        direccion_trabajo
    ];
    connection.query(sql, values, (error, result) => {
        if (error) return response.status(200).json({ error: true, message: error.message });
        return response.status(200).json({ error: false, message: result[2][0]['@msg'] });
    });
    connection.end();
});

router.get('/get-all', (request, response) => {
    connection.connect(err => {
        if (err) {
            console.log(err);
            response.status(200).json({ error: true, message: 'could not connect to DB' });
        }
    });
    const sql = `SELECT
                    ficha_identificacion.id_ficha_identificacion,
                    info_personal.nombre
                FROM
                    ficha_identificacion
                INNER JOIN 
                    info_personal 
                ON 
                    ficha_identificacion.id_info_personal = info_personal.id_info_personal`;
    connection.query(sql, (error, result) => {
        if (error) return response.status(200).json({ error: true, message: error.message });
        response.status(200).json({error: false, message: result});
    });
    connection.end();
});

module.exports = router;