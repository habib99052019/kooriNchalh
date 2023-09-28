const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const joueurSchema = require('./../../models/joueurSchema')
const adminSchema = require('./../../models/adminSchema')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
console.log("logAdmin")
router.post('/', async (req, res) => {
   
   
    try {
        var admin = await adminSchema.findOne({ login: req.body.login })

         
        if (admin) {
            console.log(admin,12);
           const  test = await bcrypt.compare(req.body.password, admin.password)
                console.log(test ,5)
            if (test) {
                var token = jwt.sign({ _id: admin._id }, 'privateKey', { expiresIn: '1d' })

                console.log(admin);
                // res.send({token: token})  pour envoyer comme objet  json 
                res.header('Authorization', token).send({ 
                    message: true , 
                    admin: admin._id,
                    role:admin.role,
                      token: token })
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