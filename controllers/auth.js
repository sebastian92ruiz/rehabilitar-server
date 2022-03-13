const { response } = require('express');
const { validationResult } = require('express-validator');


const crearTerapeuta = (req, res = response) => {

    const { email, name, password } = req.body;
    console.log(email, name, password);

    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    });

}

const loginTerapeuta = (req, res = response) => {

    const errors = validationResult( req );
    if ( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    const { email, password } = req.body;
    console.log(email, password);

    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });

}

const hojaTerapeuta = (req, res = response) => {

    const { name, fechaSolCita, horaCita, solCita, solHora, numSesiones } = req.body;
    console.log(name, fechaSolCita, horaCita, solCita, solHora, numSesiones);

    return res.json({
        ok: true,
        msg: 'Programar citas /'
    });

}

const revalidarToken = (req, res = response) => {

    return res.json({
        ok: true,
        msg: 'Renew'
    });

}



module.exports = {
    crearTerapeuta,
    loginTerapeuta,
    hojaTerapeuta,
    revalidarToken
}