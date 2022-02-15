const {Router} = require('express');
const { check } = require('express-validator');
const { login } = require('../controlles/auth');

const { validarCampos } = require('../middleware/validar-campos');
const { validaJWT, validaRol } = require('../middleware/validar-jwt');

const router = Router();

router.post('/',[
    check('correo','Datos incorrectos').isEmail(),
    check('contrasena','Datos incorrectos').notEmpty(),
    validarCampos    
],login)

module.exports=router;