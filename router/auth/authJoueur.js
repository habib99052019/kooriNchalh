const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const joueurSchema = require('./../../models/joueurSchema')
const adminSchema = require('./../../models/adminSchema')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
console.log('authJoueur1')
router.post('/', async (req, res) => {
   
   
    try {
        var joueur = await joueurSchema.findOne({ login: req.body.login })

         
        if (joueur) {
            console.log(joueur);
        
            if (req.body.password==joueur.password) {
                var token = jwt.sign({ _id: joueur._id }, 'privateKey', { expiresIn: '1d' })

                console.log(joueur);
                // res.send({token: token})  pour envoyer comme objet  json 
                res.header('Authorization', token).send({ message: true , joueur: joueur._id,token: token })
            }
            else { //res.status(201).send("mots de passe incorrect")
                return res.send({ message: false })
            }

        }
        else {
            return /*res.status(401).send("email ou mots ded passe incorrect").*/res.send({ message: false })
        }

    } catch (error) {
        res.send(error.message)
    }

});
module.exports = router;