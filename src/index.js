const colors = require('colors');
const morgan = require('morgan');
const express = require('express');
const routeIndex = require('./routes/userRoutes');
const workersIndex = require('./routes/workersRoutes');
require('./coneccion/dbMongo');

const app = express();

app.set('port' , process.env.PORT || 5000);
//!Milderwares  se ejecutan antes que llegue a las rutas si o si o sino sirve
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/user' , workersIndex , routeIndex );






app.listen(app.get('port') , ()=>{
    console.log('Server on port:'.yellow.bold , app.get('port'))
} )