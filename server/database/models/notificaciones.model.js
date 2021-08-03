const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let NotificacionesSchema = new Schema([{
    notificacion:[
        {
            fecha:{
                type:Date,
                default:Date.now
            },
            usuario:{
                type:Schema.Types.ObjectId,
                ref: 'usuario'
            },
            tipo: {
                type:String,
                required:true
            },
            mensaje: {
                type:String,
                required: true
            }
        }
        
    ]
}]);


module.exports = mongoose.model('notificacion', NotificacionesSchema)