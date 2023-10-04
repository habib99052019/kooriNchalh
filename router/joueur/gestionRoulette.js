const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const joueurSchema = require('./../../models/joueurSchema')
const adminSchema = require('./../../models/adminSchema')
const ticketSchema=require('./../../models/tiket')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
//add ticket
router.post('/addTicket', async (req, res) => {
   
    try{
    
        var ticket =  await  ticketSchema.create(req.body)
  
        await joueurSchema.findByIdAndUpdate({ _id:ticket.joueur}, { $push: { tikets: ticket._id } })
        res.send({message:true,
                   joueur:ticket._id})   

    }
    catch(error){
        res.send(error.message)   
    }
    
});
//numero ganyons
router.post('/numeroGanyon', async (req, res) => {
    var admin=  await adminSchema.findById(req.params.id)
   var tickets=[] //sont les ticket permanants
   var sommeTicketsPermanant=0
   var somme =0
   var ticketsGagnon=[]
    try{ 
        
        for (let i = 1; i < admin.Listejoueurs; i++) {

            admin.listes.Listejoueurs.tickets.forEach( async (ticket) => {
                if( ticket.realTime  ==  true){
          tickets.push(admin.listes.Listejoueurs.ticket)
          sommeTicketsPermanant=sommeTicketsPermanant+ticket.solde
          ticket.realTime=false
           await ticket.save()
                }
            })
        

        }

        for (let i = 1; i < 37; i++) {
           somme1=0
           var ticketsGagnon1=[]
           tickets.forEach(async (ticket) => {
             await   ticket.condition.forEach(async (condition) => {
                   var test = condition.condition.find((element) => element == i);
                   somme1=somme1+ condition.solde
                   ticketsGagnon1.push(ticket)
                   if(somme1 > somme &&  somme1 < sommeTicketsPermanant)
                   {
                    somme=somme1 
                    ticketsGagnon=ticketsGagnon1
                   }

                   console.log(condition ,1)
                   console.log(ticketsGagnon ,2)
           // traitement tableau de condition et ticket
              })
              });
           //changer les tickets  
  
            }
    
    
    
    }
    catch(error){
        res.send(error.message)   
    }
    
});
module.exports = router;