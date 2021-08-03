const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let MateriaSchema = new Schema([{

    nombre:{
        type:String,
        required:true
    }
}]);


module.exports = mongoose.model('materia', MateriaSchema)