const mongoose = require('mongoose');
let Schema = mongoose.Schema;

var ConversionCountSchema = new mongoose.Schema({
    _id: {type: String, required:true},
    seq: {type: Number, default: 21000}
});

var convCount = mongoose.model('convCount', ConversionCountSchema);

let ConversionSchema = new Schema([{

    bobina:{
        type:Schema.Types.ObjectId,
        ref: 'bobina'
    },
    peso:{
        type:String,
        required:true
    },
    sort:{
        type:String
    }

}]);

ConversionSchema.pre('save', function(next){
    var doc = this;
    convCount.findByIdAndUpdate({_id: 'test'}, {$inc: {seq: 1}}, {new: true, upset:true}).then(function(count) {
        doc.sort = count.seq;
        next();
    })
    .catch(function(error) {
        throw error;
    });
});

module.exports = mongoose.model('conversion', ConversionSchema)
