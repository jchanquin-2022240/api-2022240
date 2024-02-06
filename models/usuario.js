const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required:[true,'El nombre es requerido']
    },
    correo:{
        type: String,
        required: [true,"El correo electronico es obligatorio"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "La contraseña es obligatorio"]
    },
    img:{
        type:String
    },
    role:{
        type: String,
        require: true,
        enum: ["ADMIN_ROLE","USER_ROLE"]
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
});

module.exports = model('Usuario', UsuarioSchema);