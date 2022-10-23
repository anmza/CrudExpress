//console.log("Hola Mundo Desde Nodejs")

const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('./modelos/Usuario.js');

const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb+srv://Equipo2:Equipo2@tallermecanico.vtkntdd.mongodb.net/Sprint1?retryWrites=true&w=majority")

router.get('/', (req, res) => {

    res.send("API CRUD Vehiculos y Propietarios");

})

router.get('/get', (req, res) => {

    Usuario.find(function(err, documentos){

        res.send(documentos);  
    });

});

router.get('/getId', (req, res) => {

    Usuario.find( {
        Documento: req.body.Documento }, 
        function(err, documentos){

        res.send(documentos);  
    });

});

router.post('/add', (req, res) => {

    let NuevaTarea = new Usuario({

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

        }
    })

});

router.delete('/del', function(req, res) {
    Usuario.deleteOne(
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

    Usuario.findOneAndUpdate(filter, update, function(err, doc){

        if(err){

            res.send("Error, No se pudo editar Usuario");
        }else{

            res.send("El usuario se ha actualizado con exito");
            console.log(update)
        }
    });
});


app.use(router);
app.listen(3000, () => {

    console.log("Servidor corriendo en el puerto 3000")

});