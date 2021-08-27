const mongoose = require('mongoose');

let Schema = mongoose.Schema;

var CounterSchema = new mongoose.Schema({
    _id: {type: String, required:true},
    seq: {type: Number, default: 0}
});

var counter = mongoose.model('counter', CounterSchema);


let OrdenSchema = new Schema([{
            fecha:{
                type:Date,
                default:Date.now
            },
            cliente:{
                type:Schema.Types.ObjectId,
                ref: 'cliente'
            },
            producto:{
                type:Schema.Types.ObjectId,
                ref: 'producto'
            },
            paginas: {
                type:Number,
                required:true
            },
            cantidad: {
                type:Number,
                required: true
            },
            orden:{
                type:String,
                required:true
            },
            sort:{
                type:String
            }
}]);

OrdenSchema.pre('save', function(next){
    var doc = this;
    counter.findByIdAndUpdate({_id: 'test'}, {$inc: {seq: 1}}, {new: true, upset:true}).then(function(count) {
        doc.sort = count.seq;
        next();
    })
    .catch(function(error) {
        throw error;
    });
});


module.exports = mongoose.model('orden', OrdenSchema)