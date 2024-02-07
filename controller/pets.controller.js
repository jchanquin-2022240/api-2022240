const Animales = require('../models/animales');
const { response } = require('express');

const animalesGet = async (req, res = response ) => {
    const {limite, desde } = req.query;
    const query = {estadoAnimal: true};

    const [total, animales] = await Promise.all([
        Animales.countDocuments(query),
        Animales.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        animales
    });
}

const getAnimalById = async (req, res) => {
    const {id} = req.params;
    const animal = await Animales.findOne({_id: id});
    res.status(200).json({
        animal
    });
}

const  animalesPost = async (req, res) =>{
    const {nombre,especie, edad, genero} = req.body;
    const  animal = new Animales ({nombre,especie, edad, genero});
    await  animal.save();
    res.status(202).json({
        animal
    });
}

const putAnimales = async (req, res = response) =>{
    const { id } = req.params;
    const {_id,...resto } = req.body;

    const animal = await Animales.findByIdAndUpdate(id, resto);

    res.status(200).json({
        msg: 'Animal Actualizado Exitosamente!!!',
        animal
    });
}

const animalDelete = async (req, res) =>{
    const {id} = req.params;
    const animal = await Animales.findByIdAndUpdate(id, {estadoAnimal: false});

    res.status(200).json({
        msg: 'Animal Eliminado Exitosamente!!!',
        animal
    });
}

module.exports = {
    animalesGet,
    animalesPost,
    getAnimalById,
    putAnimales,
    animalDelete
}