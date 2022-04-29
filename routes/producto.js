const { Router } = require("express");
const { check } = require("express-validator");
const {
  postProducto,
  getProductos,
  putProducto,
  deleteProducto,
  putImgProducto,
  getProducto,
} = require("../controlles/producto");
const { validaId } = require("../helpers/valida-existencia");
const { validarCampos } = require("../middleware/validar-campos");
const { validaJWT, validaRol } = require("../middleware/validar-jwt");

const router = Router();

router.get("/:genero", getProductos);

router.get(
  "/detalle/:id",
  check("id", "El id del producto no es valido").isMongoId(),
  check("id").custom(validaId),
  validarCampos,
  getProducto
);

router.post(
  "/",
  [
    validaJWT,
    validaRol("ADMIN_ROL"),
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("nombre", "No debe contener más de 50 caracteres").isLength({
      max: 50,
    }),
    check("descripcion", "La descripción es obligatoria").notEmpty(),
    check("categoria", "La categoria es obligatoria").notEmpty(),
    check("categoria", "La categoria no es valida").isMongoId(),
    check("genero", "El genero no es valida").isMongoId(),
    check(["precio", "descuento", "stock"], "Debe que ser un dato númerico")
      .optional()
      .isNumeric(),
    check("descuento", "No puede tener más del 90% de descuento").isLength({
      max: 2,
    }),
    check("categoria").custom(validaId),
    check("genero").custom(validaId),
    validarCampos,
  ],
  postProducto
);

router.put(
  "/:id",
  [
    validaJWT,
    validaRol("ADMIN_ROL"),
    check("id", "El id del producto no es valido").isMongoId(),
    check("id").custom(validaId),
    check("nombre", "No debe contener más de 30 caracteres")
      .optional()
      .isLength({ max: 30 }),
    check("categoria", "La categoria no es valida").optional().isMongoId(),
    check(["precio", "descuento", "stock"], "Debe que ser un dato númerico")
      .optional()
      .isNumeric(),
    check("descuento", "No puede tener más del 90% de descuento")
      .optional()
      .isLength({ max: 2 }),
    check("categoria").optional().custom(validaId),
    validarCampos,
  ],
  putProducto
);

router.delete(
  "/:id",
  [
    validaJWT,
    validaRol("ADMIN_ROL"),
    check("id", "El id del producto no es valido").isMongoId(),
    check("id").custom(validaId),
    validarCampos,
  ],
  deleteProducto
);

router.put(
  "/img/:id",
  [
    validaJWT,
    validaRol("ADMIN_ROL"),
    check("id", "El id del producto no es valido").isMongoId(),
    check("id").custom(validaId),
    validarCampos,
  ],
  putImgProducto
);

module.exports = router;
