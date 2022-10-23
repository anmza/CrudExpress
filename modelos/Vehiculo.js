const mongoose = require('mongoose');

let Tareaschema = new mongoose.Schema({

    Placa: String,
    Tipo: String,
    Marca: String,
    Modelo: String,
    CapacidadPasajeros: String,
    Cilindraje: String,
    PaisOrigen: String,
    Caracteristicas: String
});

module.exports = mongoose.model('Vehiculo', Tareaschema);