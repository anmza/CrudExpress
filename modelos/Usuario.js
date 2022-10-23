const mongoose = require('mongoose');

let Tareaschema = new mongoose.Schema({

    Documento: String,
    Nombre: String,
    Apellido: String,
    Telefono: String,
    Ciudad: String,
    Correo: String
});

module.exports = mongoose.model('Usuarios', Tareaschema);