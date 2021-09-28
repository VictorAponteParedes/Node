const express = require('express');
const route = express.Router();
const Worker = require('../models/workrsSchema');
 
//! Agrega nuevos usuarios en la DB 
route.post('/work' , async(req , res , next)=>{
    try{
    const work = Worker(req.body);
    await work.save();
    }catch(e){
    return next(e)
    }
    res.send('Worker Saved')
});

//! Esto obtiene todos los usuarios que esta en la coleccion
route.get('/obtener', async(req, res,next)=>{
  try{
  await Worker.find()
  .then(data => res.json(data))
 }catch(e){
   return next(e)
 } res.json('Este es el resultado de la busqueda!')
 });

//! Esto obtiene solamente un de los usuarios que esta en la coleccion
route.get('/work/:id' , async(req, res, next)=>{
 try{
    const {id} = req.params;
    await Worker.findById(id)
    .then(data => res.json(data))
 }  catch(e){
     return next(e)
 }
});

//! Borra un usuario que esta en la DB
route.delete('/work/:id' , async(req , res, next)=>{
  try{
    const {id} = req.params;
    await Worker.findByIdAndRemove(id);
  } catch(e){
      return next(e)
  }res.json('El trabajador fue eliminado!')
});

//! Actualiza un usuario que esta en la DB
route.put('/work/:id' , async(req , res, next)=>{
  try{
    const {id} =  req.params;
    const {name , lastName , edad , salary} = req.body;
    await Worker.updateOne({_id:id},{$set:{name, lastName , edad , salary}});
  }catch(e){
    return next(e)
  } res.json('El trabajador fue Actualizado!')
 
 })



module.exports = route;