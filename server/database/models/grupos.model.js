const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GrupoSchema = new Schema([{

    nombre:{
        type:String,
        required:true
    },
    tipos:{
        type:Array,
        required:true
    }

}]);


module.exports = mongoose.model('grupo', GrupoSchema)