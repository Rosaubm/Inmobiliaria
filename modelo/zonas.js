
const { ObjectId } = require('bson');
var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme=new mongoose.Schema(
{

    id:{
          
    },
      nombre: {
         type: String
      },
      estrato: {
          type: String
      },
      ubicacion: {
          type: mongoose.Schema.ObjectId, ref: "ubicacion"
      }
}




)


module.exports= mongoose.model('inmueble', userscheme)


