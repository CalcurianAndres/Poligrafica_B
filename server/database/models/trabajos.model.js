const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let TrabajoSchema = new Schema([{
            maquina:{
                type:Schema.Types.ObjectId,
                ref: 'maquina'
            },
            fechaI:{
                type:String,
            },
            fecha:{
                type:String,
            },
            orden :{
                type:Schema.Types.ObjectId,
                ref: 'orden'
            },
            status:{
                type:Boolean,
                default:true
            }
}]);


module.exports = mongoose.model('trabajo', TrabajoSchema)