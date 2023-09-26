const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const joueurSchema = require('./../../models/joueurSchema')
const adminSchema = require('./../../models/adminSchema')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
console.log("joueur")
router.post('/addjoueur', async (req, res) => {
    try{
        var joueur = await joueurSchema.findOne({login:req.body.login});


    if(!joueur)
       
   { 
    var joueur =  await  joueurSchema.create(req.body)
    const saltRounds = 10;
    const salt = bcrypt.genSalt(saltRounds)
  jourur.password = await bcrypt.hash(joueur.password, saltRounds);// pour crypter password
  await joueurSchema.findByIdAndUpdate({ _id:req.body.admin }, { $push: { joueurs: joueur._id } })
   return res.send({
       message:true,
       id:joueur._id
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
        var  joueur = await adminSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
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