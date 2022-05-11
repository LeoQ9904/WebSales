const {Router} = require('express');
const { check } = require('express-validator');

const { postCanasta, getCanasta, deleteCanasta } = require('../controlles/canasta');

const { validarCampos } = require('../middleware/validar-campos');
const { validaJWT, validaRol } = require('../middleware/validar-jwt');

const router = Router();

//sin validacion de JWT
// router.post('/',postCanasta); 
// router.get('/',getCanasta);

//con validacion de JWT
router.post('/',[
    validaJWT,
    validaRol('USER_ROL'),
    validarCampos
],postCanasta);

router.get('/',[
    validaJWT,
    validaRol('USER_ROL'),
    validarCampos
],getCanasta);

router.delete('/:id',deleteCanasta);

module.exports = router;