const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ClienteSchema = new Schema([{

    nombre:{
        type:String,
        required:true
    }

}]);


module.exports = mongoose.model('cliente', ClienteSchema)