const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        name:{
            type:String
          
        },
        lastName:{
            type:String
        },
        
        city:{
            type:String
        },
        route:{
            type:String
        },
      
    })
    module.exports = mongoose.model('User_logger' , UserSchema);



