const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const joueurSchema = require('../model/joueurSchema')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
router.post('/addjoueur', async (req, res) => {
    try{
        var joueur = await joueurSchema.findOne({email:req.body.login});


    if(!joueur)
       
   { 
    var joueur =  await  joueurSchema.create(req.body)
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
router.put('/updatejoueur', async (req, res) => {
    try{
        var  joueur = await joueurSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
        res.send({message:true})
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});
router.delete('/delettejoueur', async (req, res) => {
    try{
        const joueurDelete = await joueurSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
            var prods = await   joueurSchema.find();
            res.send(prods)
          })
        
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    //jjjj
});
module.exports = router;