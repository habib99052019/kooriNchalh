const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const joueurSchema = require('../model/joueurSchema')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');



router.post('/loginjoueur', async (req, res) => {

    try{
        
        var user = await joueurSchema.findOne({login:req.body.login});

    if(user) { 
        console.log(user)
         var test = await   bcrypt.compare(req.body.password,user.password)
         if(test){ 
             res.send({message:true,id:user._id})
         }
         else{ //res.status(201).send("mots de passe incorrect")
             return res.send({message:false})}

      }
    else{
        return /*res.status(401).send("email ou mots ded passe incorrect").*/res.send({message:false})
    }
    
    }catch(error){
        res.send(error.message)   
    }
    
});
module.exports = router;