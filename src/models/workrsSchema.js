const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const WorkersSchema = new Schema({
        name:{
            type:String
          
        },
        lastName:{
            type:String
        },
        edad:{
            type:Number
        },
     
        salary:{
            type:Number
        },
    })
    module.exports = mongoose.model('Workers_logger' , WorkersSchema);