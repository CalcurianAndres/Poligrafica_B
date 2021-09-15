const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BobinaSchema = new Schema([{

    Nbobina:{
        type:String,
        required:true
    },
    material:{
        type:String,
        required:true
    },
    gramaje:{
        type:String,
        required:true
    },
    ancho:{
        type:String,
        required:true
    }
    ,
    peso:{
        type:String,
        required:true
    }

}]);


module.exports = mongoose.model('bobina', BobinaSchema)