const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const joueurSchema = require('./../../models/joueurSchema')
const adminSchema = require('./../../models/adminSchema')
const ticketSchema=require('./../../models/tiket')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
//add ticket
// async function func(){
//     var admin = await adminSchema.find().populate('Listejoueurs')
//     console.log(admin[2].Listejoueurs)
// }
// func()
router.get('/', async (req, res) => {
   
    var tickets = await ticketSchema.find()
    
        res.send(tickets)
})
router.get('/:id', async (req, res) => {
    var ticket=  await ticketSchema.findById(req.params.id)
    res.send(ticket)
})
router.post('/addTicket/:id', async (req, res) => {
   
    try{
        var ticket =  await  ticketSchema.create(req.body.ticket)
        
  
       
        
        await joueurSchema.findByIdAndUpdate({ _id:req.params.id}, { $push: { tikets: ticket._id } })
       var joueur = await joueurSchema.findByIdAndUpdate(req.params.id,req.body.joueur, { new: true })
        res.send({message:true,
                  ticket:ticket._id,
                  solde:joueur.solde
                })   

    }
    catch(error){
        res.send(error.message)   
    }
    
});

router.post('/numeroGanyon/:id', async (req, res) => {
    var admin=  await adminSchema.findById(req.params.id)
   var tickets=[] 
   var sommeTicketsPermanant=0

   var somme =0
   var ticketsGagnon=[]
    try{ 
        
        for (let i = 1; i < admin.Listejoueurs.length; i++) {

            admin.Listejoueurs.tickets.forEach( async (ticket) => {
                if( ticket.realTime  ==  true){
          tickets.push(admin.listes.Listejoueurs.ticket)
          sommeTicketsPermanant=sommeTicketsPermanant+ticket.solde
          
          ticket.realTime=false
           await ticket.save()
                }
            })
        

        }

        for (let i =1 ; i < 37; i++) {
           somme1=0
           var ticketsGagnon1=[]
           tickets.forEach(async (ticket) => {
            
             await   ticket.condition.forEach(async (condition) => {
             
    var test = condition.condition.some((element) => element == i);
  
                   if(test==true){
                    somme1=somme1+ condition.soldeGagner
                    
                    ticketsGagnon1.push(ticket)
                 
                    if(somme1 > somme &&  somme1 < sommeTicketsPermanant)
                    {
                     somme=somme1 
                     ticketsGagnon=ticketsGagnon1
                     var condition=i
                    }

                   }
                  

                   console.log(condition ,1)
                   console.log(ticketsGagnon ,2)
           
              })
              });
  
            }
    
    
    
    }
    catch(error){
        res.send(error.message)   
    }
    
});
module.exports = router;