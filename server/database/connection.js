const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology: true
}, (err, res)=>{
    if( err ) throw err;

    console.log('Base de datos ONLINE')
});

module.exports = mongoose;