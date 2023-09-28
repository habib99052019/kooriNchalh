const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const joueurSchema = require('./../../models/joueurSchema')
const adminSchema = require('./../../models/adminSchema')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
console.log("joueur")

// async function func(){
//     var joueurs = await joueurSchema.find(); 

//    console.log(joueurs)
   
        
//    for (let i = 0; i < joueurs.length ; i++) {
//      await joueurSchema.deleteOne({ _id: joueurs[i]._id })
      
//  }
//  var  joueu =await joueurSchema.find()
//  console.log(joueu ,"d")
// }
// func()
router.get('/', async (req, res) => {
    var joueurs = await joueurSchema.find(); 
    res.send(joueurs)
})
router.get('/:id', async (req, res) => {
    var joueur = await joueurSchema.findById(req.params.id) 
    res.send(joueur)
})

router.post('/addjoueur', async (req, res) => {
   
    try{
        var joueur1 = await joueurSchema.findOne({login:req.body.login});
    
    
    if(!joueur1)
       
    { 
    var joueur =  await  joueurSchema.create(joueur)
    console.log(joueur ,"1")
    const saltRounds = 10;
    //const myPlaintextPassword = 's0/\/\P4$$w0rD';
    //const someOtherPlaintextPassword = 'not_bacon'
   
    bcrypt.hash(joueur.password, saltRounds, async function(err, hash){
        joueur.password=hash
      await  joueur.save();
        console.log(joueur,"2")
        await adminSchema.findByIdAndUpdate({ _id:joueur.admin }, { $push: { Listejoueurs: joueur._id } })
        res.send({message:true,
                   joueur:joueur._id})
    
    
    
    })
    }
    else{
      res.send({message:false})
    }

    
        
    
    }
    catch(error){
        res.send(error.message)   
    }
    
});
router.put('/:id', async (req, res) => {
    try{
        var  joueur = await adminSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
        res.send({message:true})
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});
router.delete('/:id', async (req, res) => {
    try{
        const joueurDelete = await joueurSchema.deleteOne({ _id: req.params.id })
        
   
      const  joueurs =await joueurSchema.find()
      res.send(joueurs)
    
    }catch(error){
        res.send(error.message)   
    }
    //jjjj
});


module.exports = router;