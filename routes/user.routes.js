const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos.js');

const { 
    usuarioGet,
    usuariosPost } = require('../controller/user.controller');
const usuario = require('../models/usuario.js');

const { esRoleValido, existenteEmail, existeUsuarioById} = require('../helpers/db-validators.js');

const router = Router();

router.get(
    "/:id",
    [
        check('id','No es un id validor').isMongoId(),
        check('id').custom(existeUsuarioById),
        validarCampos
    ], getUsuarioById);

route.put(
    "/:id",
    [
        check('id','No es un id validor').isMongoId(),
        check('id').custom(existeUsuarioById),
        check("role").custom(esRoleValido),
        validarCampos
    ], putUsuarios);

router.post(
    "/",
    [
        check("nombre", "El nombre no puede estar vacio").not().isEmpty(),
        check("password","El password debe ser mayor a 6 caracteres").isLength({min:6}),
        check("correo", "Correo electronico invalido").isEmail(),
        check("correo").custom(existenteEmail),
        check("role").custom(esRoleValido),
        validarCampos,
    ], usuariosPost);
    
router.delete(
    "/:id",
    [
        check('id','No es un id validor').isMongoId(),
        check('id').custom(existeUsuarioById),
        check("role").custom(esRoleValido),
        validarCampos
    ], usuariosDelete);

module.exports = router;