const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let SustratoSchema = new Schema([{

    cantidad:{
        type:String,
        required:true
    },
    material:{
        type:String,
        required:true
    }

}]);


module.exports = mongoose.model('sustrato', SustratoSchema)