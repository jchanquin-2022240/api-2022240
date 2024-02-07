const { Schema, model} = require("mongoose")

const AnimalSchema = Schema({
    nombre:{
      type: String,
      required: [true,'El nombre es requerido'] 
    },
    especie:{
        type: String,
        required: [true,'La especie es requerida']
    },
    edad:{
        type: String,
        required: [true,'La edad es necesaria']
    },
    genero:{
        type: String,
        required: [true, 'El genero es obligatorio']
    },
    estadoAnimal:{
        type: Boolean,
        default: true
    }
    
});

module.exports = model('Animales', AnimalSchema);