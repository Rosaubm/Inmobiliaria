const { Double } = require("bson")
var mongoose= require("mongoose")

const personaEsquema = mongoose.Schema({

nombre:{
   type: String

},
edad: {

    type: String
},

cedula: {
    type: String
}

})
module.exports= mongoose.model('persona', personaEsquema)