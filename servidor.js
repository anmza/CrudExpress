//console.log("Hola Mundo Desde Nodejs")

const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Propietario = require('./modelos/Propietario.js');
const Vehiculo = require('./modelos/Vehiculo');

const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb+srv://Equipo2:Equipo2@tallermecanico.vtkntdd.mongodb.net/Sprint1?retryWrites=true&w=majority")

router.get('/', (req, res) => {

    res.send("API CRUD Vehiculos y Propietarios");

})


//--------------------------------------------------------------------------------------------------------------------------------
//                                                            CRUD Propietario
//---------------------------------------------------------------------------------------------------------------------------------

router.get('/get', (req, res) => {

    Propietario.find(function(err, documentos){

        res.send(documentos);  
    });

});

router.get('/getDoc', (req, res) => {

    Propietario.find( {
        Documento: req.body.Documento }, 
        function(err, documentos){

        res.send(documentos);  
    });

});

router.post('/add', (req, res) => {

    let NuevaTarea = new Propietario({

        Documento: req.body.Documento,
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        Telefono: req.body.Telefono,
        Ciudad: req.body.Ciudad,
        Correo: req.body.Correo

    });

    NuevaTarea.save(function (err, datos) {

        if (err) {
            res.send("Ocurrio Un error");
        } else {

            res.send("Usuario almacenado correctamente.");
            console.log(NuevaTarea);

        }
    })

});

router.delete('/del', function(req, res) {
    Propietario.deleteOne(
        {
            Documento: req.body.Documento
        },
        function(err, documento){
            if(err){
                res.send("Error, No se pudo eliminar usuario")
            }else{

                res.send("Usuario eliminado con exito")
            }
        }
    );
})

app.put('/edit', function(req, res){

    const filter = { Documento: req.body.Documento };
    const update =  { Ciudad: req.body.Ciudad };

    Propietario.findOneAndUpdate(filter, update, function(err, doc){

        if(err){

            res.send("Error, No se pudo editar Usuario");
        }else{

            res.send("El usuario se ha actualizado con exito");
            console.log(update)
        }
    });
});


//----------------------------------------------------------------------------------------------------------------------------------------
//                                                             CRUD  Vehiculo
//----------------------------------------------------------------------------------------------------------------------------------------

router.get('/get/Vehiculo', (req, res) => {

    Vehiculo.find(function(err, documentos){

        res.send(documentos);  
    });

});

router.get('/getPlaca/Vehiculo', (req, res) => {

    Vehiculo.find( {
        Placa: req.body.Placa }, 
        function(err, documentos){

        res.send(documentos);  
    });

});

router.post('/add/Vehiculo', (req, res) => {

    let NuevaTarea = new Vehiculo({

        Placa: req.body.Placa,
        Tipo: req.body.Tipo,
        Marca: req.body.Marca,
        Modelo: req.body.Modelo,
        CapacidadPasajeros: req.body.CapacidadPasajeros,
        Cilindraje: req.body.Cilindraje,
        PaisOrigen: req.body.PaisOrigen,
        Caracteristicas: req.body.Caracteristicas

    });

    NuevaTarea.save(function (err, datos) {

        if (err) {
            res.send("Ocurrio Un error");
        } else {

            res.send("Vehiculo almacenado correctamente.");
            console.log(NuevaTarea);

        }
    })

});

router.delete('/del/Vehiculo', function(req, res) {
    Vehiculo.deleteOne(
        {
            Placa: req.body.Placa
        },
        function(err, documento){
            if(err){
                res.send("Error, No se pudo eliminar Vehiculo")
            }else{

                res.send("Vehiculo eliminado con exito")
            }
        }
    );
})

app.put('/edit/Vehiculo', function(req, res){

    const filter = { Placa: req.body.Placa };
    const update =  { Caracteristicas: req.body.Caracteristicas };

    Vehiculo.findOneAndUpdate(filter, update, function(err, doc){

        if(err){

            res.send("Error, No se pudo editar Vehiculo");
        }else{

            res.send("El Vehiculo se ha actualizado con exito");
            console.log(update)
        }
    });
});

//-------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------

app.use(router);
app.listen(3000, () => {

    console.log("Servidor corriendo en el puerto 3000")

});