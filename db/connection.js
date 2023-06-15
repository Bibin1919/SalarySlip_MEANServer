/* define mongooos connecttion */

const mongoose = require('mongoose')
const DB = process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('MongoDb Atlas Connected Successfully');
}).catch((err)=>{
    console.log(err);
})