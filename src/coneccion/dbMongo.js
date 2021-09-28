const mongoose = require('mongoose');
const colors = require('colors');
const uri = 'mongodb://localhost:27017/Registro'.red.bold;


mongoose.connect(uri , {  
   useNewUrlParser:true,
   useNewUrlParser:true
})
.catch(err => console.log('Este es el Problema:'.red.bold , err));
mongoose.connection.once('open' , _=> {
console.log('DB conectada:'.blue.bold, uri)})