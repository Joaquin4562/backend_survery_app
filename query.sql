DELIMITER $$
create procedure SP_formato_encuesta (
    in id_usuarios int,
    in deficiencia varchar(50),
    in enfermedadCronica varchar(50),
    in medicamentos varchar(50),
    in horario varchar(50),
    in hinchados varchar(50),
    in doloresVientre varchar(50),
    in doloresCabeza varchar(50),
    in perdidaEquilibrio varchar(50),
    in fatiga varchar(50),
    in perdidaVista varchar(50),
    in dificultadesDormir varchar(50),
    in pesadillas varchar(50),
    in incontinencia varchar(50),
    in tartamudeos varchar(50),
    in miedosIntensos varchar(50),
    in relacionFamilia varchar(50),
    in dificultades varchar(50),
    in tipoDificultades varchar(50),
    in actitudFamilia varchar(50),
    in relacionPadre varchar(50),
    in acitudPadre varchar(50),
    in relacionMadre varchar(50),
    in actitudMadre varchar(50),
    in ligadoAfectivamente varchar(50),
    in ocupaEducacion varchar(50),
    in decisionEstudiar varchar(50),
    in otroDatoFamiliar varchar(50),
    in relacionAmigos varchar(50),
    in tienesPareja varchar(50),
    in relacionPareja varchar(50),
    in relacionMaestros varchar(50),
    in relacionAutoridadesAcademicas varchar(50),
    in tiempoLibre varchar(50),
    in actividadRecreativa varchar(50),
    in puntual varchar(50),
    in timido varchar(50),
    in alegre varchar(50),
    in agresivo varchar(50),
    in abierto varchar(50),
    in reflexivo varchar(50),
    in constante varchar(50),
    in optimista varchar(50),
    in impulsivo varchar(50),
    in silencioso varchar(50),
    in generoso varchar(50),
    in inquieto varchar(50),
    in cambioHumor varchar(50),
    in dominante varchar(50),
    in egoista varchar(50),
    in sumiso varchar(50),
    in confiado varchar(50),
    in imaginativo varchar(50),
    in iniciativaPropia varchar(50),
    in sociable varchar(50),
    in responsable varchar(50),
    in perseverable varchar(50),
    in motivado varchar(50),
    in activo varchar(50),
    in independiente varchar(50),
    in gustariaSer varchar(50),
    in ayudaTareas varchar(50),
    in problemasPersonales varchar(50),
    in redimentoEscolar varchar(50),
    in materiaPreferida varchar(50),
    in porqueMateriaPreferida varchar(50),
    in materiaSobresaliente varchar(50),
    in porqueMateriaSobresaliente varchar(50),
    in materiaDesagrada varchar(50),
    in porqueMateriaDesagrada varchar(50),
    in materiaPeorPromedio varchar(50),
    in porqueVienesAlTecnologico varchar(50),
    in motivacionTecnologico varchar(50),
    in promedioGeneralCicloAnterior varchar(50),
    in materiasReprobadas varchar(50),
    in planesInmediatos varchar(50),
    in metasDeVida varchar(50),
    in yoSoy varchar(50),
    in miCaracterEs varchar(50),
    in meGustaQue varchar(50),
    in aspiroEnLaVida varchar(50),
    in tengoMiedoQue varchar(50),
    in piensoQuePodreLograr varchar(50),
    out msg varchar(100)
)
BEGIN

DECLARE EXIT HANDLER for SQLEXCEPTION

BEGIN
SHOW ERRORS LIMIT 1;
SET msg = 'error formato encuesta';
ROLLBACK;
END;

START TRANSACTION;

insert into 
        datos_medicos 
            (deficiencia, 
            enfermedadCronica, 
            medicamentos, 
            horario) 
        values 
            (deficiencia, 
            enfermedadCronica, 
            medicamentos, 
            horario);

SET @id_datos_medicos = LAST_INSERT_ID();

insert into desajustes_psicofisicos
    (
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
        miedosIntensos
    )
    values
    (
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
        miedosIntensos
    );

    SET @id_desajustes_psicofisicos = LAST_INSERT_ID();

insert into areas_integracion_familia 
    (
        relacionFamilia,
        dificultades,
        tipoDificultades,
        actitudFamilia,
        relacionPadre,
        acitudPadre,
        relacionMadre,
        actitudMadre,
        ligadoAfectivamente,
        ocupaEducacion,
        decisionEstudiar,
        otroDatoFamiliar
    )
    values
    (
        relacionFamilia,
        dificultades,
        tipoDificultades,
        actitudFamilia,
        relacionPadre,
        acitudPadre,
        relacionMadre,
        actitudMadre,
        ligadoAfectivamente,
        ocupaEducacion,
        decisionEstudiar,
        otroDatoFamiliar
    );
    
    SET @id_areas_integracion_familia = LAST_INSERT_ID();

insert into areas_integracion_social 
    (
        relacionAmigos,
        tienesPareja,
        relacionPareja,
        relacionMaestros,
        relacionAutoridadesAcademicas,
        tiempoLibre,
        actividadRecreativa
    )
    values 
    (
        relacionAmigos,
        tienesPareja,
        relacionPareja,
        relacionMaestros,
        relacionAutoridadesAcademicas,
        tiempoLibre,
        actividadRecreativa
    );

    SET @id_areas_integracion_social = LAST_INSERT_ID();

insert into caracteristicas_personales 
    (
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
        independiente
    ) 
    values
    (
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
        independiente
    );
    SET @id_caracteristicas_personales = LAST_INSERT_ID();

insert into areas_integracion_psicopedagogica 
    (
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
        materiasReprobadas
    )
    values
    (
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
        materiasReprobadas
    );
    SET @id_areas_integracion_psicopedagogicas = LAST_INSERT_ID();

    insert into plan_vida_personales
    (
        planesInmediatos,
        metasDeVida,
        yoSoy,
        miCaracterEs,
        meGustaQue,
        aspiroEnLaVida,
        tengoMiedoQue,
        piensoQuePodreLograr
    )
    values
    (
        planesInmediatos,
        metasDeVida,
        yoSoy,
        miCaracterEs,
        meGustaQue,
        aspiroEnLaVida,
        tengoMiedoQue,
        piensoQuePodreLograr
    );

    SET @id_plan_vida_personales = LAST_INSERT_ID();

    insert into formato_encuesta (
        id_datos_medicos,
        id_desajustes_psicofisicos,
        id_areas_integracion_familia,
        id_areas_integracion_social,
        id_caracteristicas_personales,
        id_areas_integracion_psicopedagogicas,
        id_plan_vida_personales,
        id_usuarios
    )
    values
    (
        @id_datos_medicos,
        @id_desajustes_psicofisicos,
        @id_areas_integracion_familia,
        @id_areas_integracion_social,
        @id_caracteristicas_personales,
        @id_areas_integracion_psicopedagogicas,
        @id_plan_vida_personales,
        id_usuarios
    );
COMMIT;
SET msg = 'encuesta registada';
END$$
DELIMITER ;