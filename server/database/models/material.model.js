const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let MateriaPrima = new Schema([{
            grupo:{
                type:Schema.Types.ObjectId,
                ref: 'materia' 
            },
            nombre:{
                type:String,
            },
            cantidad:{
                type:Number
            },
            unidad: {
                type:String
            }
}]);


module.exports = mongoose.model('material', MateriaPrima)