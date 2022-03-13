const { Router } = require('express');
const { check } = require('express-validator');
const { crearTerapeuta, loginTerapeuta, hojaTerapeuta, revalidarToken } = require('../controllers/auth');


const router = Router();

// Crear un nuevo usuario
router.post( '/new', crearTerapeuta );

// Login de usuario
router.post( '/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({min: 8}),
], loginTerapeuta);

// Hoja de citas de terapeuta
router.post( '/cita', hojaTerapeuta);

// Validar y revalidar token
router.get( '/renew', revalidarToken);







module.exports = router;