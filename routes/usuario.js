const {Router} = require('express');
const { check } = require('express-validator');


const { getUsuario, postUsuario, getUsuarios, putUsuario, deleteUsuario } = require('../controlles/usuario');
const { validaId } = require('../helpers/valida-existencia');
const { validarCampos } = require('../middleware/validar-campos');

const { validaJWT, validaRol } = require('../middleware/validar-jwt');

const router = Router();

router.get('/',getUsuarios);

router.post('/',[
    validaJWT,
    validaRol('ADMIN_ROL'),
    check('nombre','El nombre es obligatorio').notEmpty(),
    check('correo','Correo incorrecto').notEmpty().isEmail(),
    check('telefono','Telefono incorrecto').optional().isNumeric({min:10}),
    validarCampos
],postUsuario);

router.put('/:id',[        
    validaJWT,
    validaRol('ADMIN_ROL'),
    check('correo','Correo incorrecto').optional().isEmail(),
    check('telefono','Telefono incorrecto').optional().isNumeric({min:10}),
    check('id').custom(validaId),
    validarCampos
],putUsuario);

router.delete('/:id',[
    validaJWT,
    validaRol('ADMIN_ROL'),
    check('id').custom(validaId),
    validarCampos    
],deleteUsuario);

module.exports = router;