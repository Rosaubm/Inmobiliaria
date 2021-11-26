const express= require("express");
const {createReadStream} = require('fs')
var modelo= require('./user')
var modeloUbicacion=require('./ubicacion')
var modeloInmueble=require('./inmuebles')

//var qs=require("querystring")
//var body_parser = require('body-parser');


const app= new express();
const HTML_CONTENT_TYPE = 'text/html'

//app.use(body_parser.urlencoded({extended:true}));
/*
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
*/
const bodyParser = require("body-parser");
app.use(bodyParser.json());



app.use(express.static("./public"));


const path = require("path");
var modeloUsario= require('./inmuebles')


 require('./conexion')
 

 
     
 app.post("/insertar", (req, res) => {
   var myobj = { nombre: req.body.nombre, cedula: req.body.cedula, clave: req.body.clave };
   modelo.collection.insertOne(myobj, function(err, res) {
   if (err) throw err;

  })
  res.send("datos creados")

  })


  app.post("/insertarInmueble", (req, res) => {
    let oldName = req.body;// Obtener el nombre
    // Agrega el sufijo original al nuevo nombre
   
console.log(req.body.ubicacion)



  /*
    modeloUbicacion.find({barrio:req.body.ubicacion}, (err, docs) => {
      var myobj = { nombre:req.body.nombre, tipo: req.body.tipo, imagen: req.body.imagen, ubicacion: docs[0]._id  };
      modeloInmueble.collection.insertOne(myobj, function(err, res) {
      if (err) throw err;  
      })
      })
    res.send("inmueble guardado")

*/

  })

   


  app.post("/insertarUbicacion", (req, res) => {
  
      var myobj = { nombre:req.body.nombre, tipo: req.body.tipo, imagen: req.body.imagen, ubicacion: docs[0]._id  };
      modeloInmueble.collection.insertOne(myobj, function(err, res) {
      if (err) throw err;  
      })
      
    res.send("ubicacion guardada")
  })

  app.post("/insertarInmuebles", (req, res) => {
  //coloco la lógica para insertar un nuevo inmueble
  modeloUbicacion.find({barrio:'toberin'}, (err,docs) => {
    var myobj = { nombre: 'casa_5', tipo: 'casa', imagen: '/img.png', ubicacion: docs[0]._id  };
    modeloInmueble.collection.insertOne(myobj, function(err, res) {
    if (err) throw err;
  
    })
    
    console.log("datos guardados")
  })
 
    
  res.send("respuesta desde el servidor")
})


/*
modeloUbicacion.find({barrio:'toberin'}, (err,docs) => {
  var myobj = { nombre:'apartamento_14', tipo: 'apartamento', imagen: '/img.png', ubicacion: docs[0]._id  };
  modeloInmueble.collection.insertOne(myobj, function(err, res) {
  if (err) throw err;

  })
  console.log("datos guardados. Inmueble con su ubicación")
  
  })
  */

modelo




//cuando guardo el inmueble le envio el criterio ubicación

 


/*
  modeloUbicacion.find({barrio:'toberin'}, (err, docs) => {
    var myobj = { nombre:'apto8', tipo: 'apartacho', imagen: 'esa2', ubicacion: docs[0]._id  };
    modeloInmueble.collection.insertOne(myobj, function(err, res) {
    if (err) throw err;
  
    })
     console.log(docs[0]._id)

})
*/
  //})

  app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
 

  createReadStream('./inmueble.html').pipe(res)
//res.end("hola mundo");
   
  })


  app.listen(9000, () => {

    console.log("aplicacion corriendo en el puerto 9000")
    
    })
  
    
   




