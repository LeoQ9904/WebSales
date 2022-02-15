const {Router} = require('express');

const { postCanasta } = require('../controlles/canasta');

const { validarCampos } = require('../middleware/validar-campos');
const { validaJWT, validaRol } = require('../middleware/validar-jwt');

const router = Router();

router.post('/',[
    validaJWT,
    validaRol('USER_ROL'),
    validarCampos
],postCanasta)


module.exports = router;