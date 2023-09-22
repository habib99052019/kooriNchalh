const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const adminSchema = require('../model/adminSchema')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
router.post('/addAdmin', async (req, res) => {
    try{
        var admin = await adminSchema.findOne({email:req.body.login});


    if(!admin)
       
   { 
    var admin =  await  adminSchema.create(req.body)
   return res.send({
       message:true
   })
    }
    else{
        return res.send({message:false})
    }
   
 /*var  user  =new userSchema({
           nom:req.params.nom,
         age:req.params.age     //tu peut creer d'apres les parametres /:nom/:age en api de poste
      
   })    
    /*  user = await userSchema.create(user);*/
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});
router.put('/updateAdmin', async (req, res) => {
    try{
        var  admin = await adminSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
        res.send({message:true})
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});
router.delete('/deletteAdmin', async (req, res) => {
    try{
        const adminDelete = await adminSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
            var prods = await   adminSchema.find();
            res.send(prods)
          })
        
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});