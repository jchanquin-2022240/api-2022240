const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const {
    animalesGet,
    animalesPost,
    getAnimalById,
    putAnimales,
    animalDelete} = require('../controller/pets.controller');

const { existenteAnimalById} = require('../helpers/db-validators');

const router = Router();

router.get("/", animalesGet);

router.get(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existenteAnimalById),
        validarCampos
    ], getAnimalById);

router.post(
    "/",
    [
        check("nombre","El nombre no puede estar vacio").not().isEmpty(),
        check("especie","La especie no puede ir vacía").not().isEmpty(),
        check("edad", "La edad no puede ir vacía").not().isEmpty(),
        check("genero","el genero no puede ir vacío").not().isEmpty(),
        validarCampos,
    ], animalesPost);

router.put(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId()
    ], putAnimales);

router.delete(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId()
    ], animalDelete);


module.exports = router;