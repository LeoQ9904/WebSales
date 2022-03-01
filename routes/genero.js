const {Router} = require('express');
const { check } = require('express-validator');
const { getGenero, postGenero, putGenero, deleteGenero } = require('../controlles/genero');
const { validarCampos } = require('../middleware/validar-campos');
const { validaJWT, validaRol } = require('../middleware/validar-jwt');

const router = Router();

router.get('/',getGenero);
router.post('/',[
    validaJWT,
    validaRol('ADMIN_ROL'),
    check('nombre','Dato requerido').notEmpty(),
    validarCampos
],postGenero);
router.put('/:id',[
    validaJWT,
    validaRol('ADMIN_ROL'),
    validarCampos
],putGenero);
router.delete('/:id',[
    validaJWT,
    validaRol('ADMIN_ROL'),
    validarCampos
],deleteGenero);

module.exports = router;