const Role = require ('../models/role');
const Usuario = require ('../models/usuario');
const Animales = require ('../models/animales');

const esRoleValido = async (role = "") => {
    const existeRol = await Role.findOne({role});
    if(!existeRol){
        throw new Error(`El rol ${role} no existe en la base de datos`);
    }
}

const existenteEmail = async (correo =  '') =>{
    const existeEmail = await Usuario.findOne ({ correo });
    if(existeEmail){
        throw new Error(`El correo ${correo} ya esta registrado`);
    }
}

const existeUsuarioById =  async (id = '') => {
    const existeUsuario = await Usuario.findOne ({id}) ;
    if (existeUsuario) {
        throw new Error (`El usuario con ${id} no existe`);
    }
}

const existenteAnimalById =  async (id = '') => {
    const existeAnimal = await Animales.findOne ({id}) ;
    if (existeAnimal) {
        throw new Error (`El animal con ${id} no existe`);
    }
}

module.exports = {
    esRoleValido,
    existenteEmail,
    existeUsuarioById,
    existenteAnimalById
}