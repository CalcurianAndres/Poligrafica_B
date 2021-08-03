const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let OrdenSchema = new Schema([{
            fecha:{
                type:Date,
                default:Date.now
            },
            cliente:{
                type:Schema.Types.ObjectId,
                ref: 'cliente'
            },
            producto:{
                type:Schema.Types.ObjectId,
                ref: 'producto'
            },
            paginas: {
                type:Number,
                required:true
            },
            cantidad: {
                type:Number,
                required: true
            },
            orden:{
                type:String,
                required:true
            }
}]);


module.exports = mongoose.model('orden', OrdenSchema)