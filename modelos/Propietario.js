const mongoose = require('mongoose');

let Tareaschema = new mongoose.Schema({

    Documento: Number,
    Nombre: String,
    Apellido: String,
    Telefono: Number,
    Ciudad: String,
    Correo: String
});

module.exports = mongoose.model('Usuarios', Tareaschema);