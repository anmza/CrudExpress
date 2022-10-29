const mongoose = require('mongoose');

let Tareaschema = new mongoose.Schema({

    Placa: String,
    Tipo: String,
    Marca: String,
    Modelo: Number,
    CapacidadPasajeros: Number,
    Cilindraje: String,
    PaisOrigen: String,
    Caracteristicas: String
});

module.exports = mongoose.model('Vehiculo', Tareaschema);