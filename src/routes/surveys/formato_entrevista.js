const router = require('express').Router()
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
        // Datos medicos
        deficiencia,
        enfermedadCronica,
        medicamentos,
        horario,
        // desajustes psicofisicos
        hinchados,
        doloresVientre,
        doloresCabeza,
        perdidaEquilibrio,
        fatiga,
        perdidaVista,
        dificultadesDormir,
        pesadillas,
        incontinencia,
        tartamudeos,
        miedosIntensos,
        // Areas de integracion
            //area familiar
        relacionFamilia,
        dificultades,
        tipoDificultades,
        actitudFamilia,
        // padre
        relacionPadre,
        acitudPadre,
        // madre
        relacionMadre,
        actitudMadre,
        // ---
        ligadoAfectivamente,
        ocupaEducacion,
        decisionEstudiar,
        otroDatoFamiliar,
        // Area social
        relacionAmigos,
        tienesPareja,
        relacionPareja,
        relacionMaestros,
        relacionAutoridadesAcademicas,
        tiempoLibre,
        actividadRecreativa,
        // Caracteristicas personales,
        puntual,
        timido,
        alegre,
        agresivo,
        abierto,
        reflexivo,
        constante,
        optimista,
        impulsivo,
        silencioso,
        generoso,
        inquieto,
        cambioHumor,
        dominante,
        egoista,
        sumiso,
        confiado,
        imaginativo,
        iniciativaPropia,
        sociable,
        responsable,
        perseverable,
        motivado,
        activo,
        independiente,
        // Area psicopedagogica
        gustariaSer,
        ayudaTareas,
        problemasPersonales,
        redimentoEscolar,
        materiaPreferida,
        porqueMateriaPreferida,
        materiaSobresaliente,
        porqueMateriaSobresaliente,
        materiaDesagrada,
        porqueMateriaDesagrada,
        materiaPeorPromedio,
        porqueVienesAlTecnologico,
        motivacionTecnologico,
        promedioGeneralCicloAnterior,
        materiasReprobadas,
        // plan de vida y carrera
        planesInmediatos,
        metasDeVida,
        // Caracteristicas personales
        yoSoy,
        miCaracterEs,
        meGustaQue,
        aspiroEnLaVida,
        tengoMiedoQue,
        piensoQuePodreLograr,
    } = request.body;
});

module.exports = router;