const express = require('express');
const route = express.Router();
const User = require('../models/userSchema');

//! agregar usuarios
route.post('/logger' , async(req , res , next)=>{
    try{
    const user = User(req.body);
    await user.save();
    }catch(e){
    return next(e)
    }
    res.send('Guardado')
});
//! obtener todos los  usuarios
  route.get('/get' , (req, res)=>{
  User.find()
  .then(data => res.json(data))
  .catch(error => res.json({message:error}))
  });
//! obtener usuarios
route.get('/:id' , async(req , res , next)=>{
   try{
    const {id} = req.params;
    await User.findById(id)
    .then(data => res.json(data))
   }catch(e){
    return next(e)}  
});

//! borrar usuarios
route.delete('/:id', async(req , res , next)=>{
  try{
  const {id} = req.params;
  await User.findOneAndRemove({_id:id})
  }catch(e){
  return next(e)
  }res.send("El usuario ha sido eliminado")
})








module.exports = route;