const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let MaquinaSchema = new Schema([{

    nombre:{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        required:true
    },
    colores:{
        type:Number
    },
    cph:{
        type:Number,
        required:true
    }

}]);


module.exports = mongoose.model('maquina', MaquinaSchema)

//   nombre:'XML200',
//   tipo:'impresora',
//   colores:'4',
//   cph:1000

// comentarios:[
//     {
//         fecha:{
//             type:Date,
//             default:Date.now
//         },
//         usuario:{
//             type:Schema.Types.ObjectId,
//             ref: 'usuario'
//         },
//         mensaje: {
//             type:String,
//             required: true
//         }
//     }
    
// ]