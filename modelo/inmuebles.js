const { ObjectId } = require("bson")
var mongoose= require("mongoose")

const inmobiliariaEsquema = mongoose.Schema({

nombre:{
   type: String

},
tipo: {

    type: String
},

imagen: {
    type: String
},

ubicacion: {
    type: ObjectId
}
})
module.exports= mongoose.model('inmueble', inmobiliariaEsquema)