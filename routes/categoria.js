const {Router} = require('express');
const {check} =require('express-validator');

const {validarCampos} = require('../middleware/validar-campos')


const { postCategoria, getCategorias, putCategoria, deleteCategoria } = require('../controlles/categoria');
const { validaId } = require('../helpers/valida-existencia');
const { validaJWT, validaRol } = require('../middleware/validar-jwt');


const router = Router();
router.post('/',[
    validaJWT,
    validaRol('ADMIN_ROL'),
    check('nombre','El nombre es obligatorio').notEmpty(),
    check('descripcion','La descripción es obligatoria').notEmpty(),
    validarCampos
],postCategoria);

router.put('/:id',[
    validaJWT,
    validaRol('ADMIN_ROL'),
    check('id','El id no es valido').isMongoId(), 
    check('id').custom(validaId),      
    validarCampos
],putCategoria);

router.get('/',getCategorias);

router.delete('/:id',[
    validaJWT,
    validaRol('ADMIN_ROL'),
    check('id','El id no es valido').isMongoId(), 
    check('id').custom(validaId),      
    validarCampos
],deleteCategoria)

module.exports=router;