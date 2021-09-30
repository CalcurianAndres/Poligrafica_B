const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ProductoFinal = new Schema([{
            cliente:{
                type:Schema.Types.ObjectId,
                ref: 'cliente'
            },
            grupo:{
                type:Schema.Types.ObjectId,
                ref: 'grupo'
            },
            producto :{
                type:String
            },
            materiales: {
                type:Array
            },
            ejemplares:{
                type:String
            },
            post: {
                type:Array
            },
            sustrato: {
                type:String
            },
            dimensiones: {
                type:String
            },
            fibra: {
                type:String
            },
            codigo: {
                type:String
            }
}]);


module.exports = mongoose.model('producto', ProductoFinal)