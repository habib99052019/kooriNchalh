const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const adminSchema = require('./../../models/adminSchema')

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

console.log("adcRUD")
router.post('/addAdmin', async (req, res) => {
    try{
        var admin = await adminSchema.findOne({login:req.body.login});


    if(!admin)
       
   { 
    var admin =  await  adminSchema.create(req.body)
    const saltRounds = 10;
    const salt = bcrypt.genSalt(saltRounds)
   admin.password = await bcrypt.hash(admin.password, saltRounds);// pour crypter password

    admin.save();
   return res.send({
       message: true,
       id: admin._id
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


module.exports = router;