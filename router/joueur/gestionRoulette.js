const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const joueurSchema = require('./../../models/joueurSchema')
const adminSchema = require('./../../models/adminSchema')
const ticketSchema=require('./../../models/tiket')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
var cron = require('node-cron');
var  test=true
// //add ticket
 async function func(){
     var tickets = await ticketSchema.find()
      var joueurs=await joueurSchema.find()
     for (let i = 0; i < tickets.length; i++) {
        
        await ticketSchema.deleteOne({ _id:tickets[i]._id })
       
     }
     for (let i = 1; i < joueurs.length; i++) 
     {
        joueurs[i].tikets=[]
        await joueurs[i].save()
             }
// //              var tickets1 = await ticketSchema.find()
// //              var joueurs1 = await joueurSchema.find(); 
//             //  console.log(tickets1,"12")
//     //   console.log(tickets1)
// //     // try{
// //     //     var obj  = {
// //     //         joueur:{
// //     //         id: "651ee759305ce08dada296b3",
// //     //         solde: 125
// //     //             } ,
        
// //     //         ticket:{  
// //     //              numero:123589,
// //     //              condition:[{
// //     //             condition_id: 'TLyoF12', 
// //     //         condition: [20,19],
// //     //          soldeJouer: 0.5, 
// //     //         soldeGagner: 18, 
// //     //         coefficient: 36 
// //     //                        }],
// //     //         solde:50,
// //     //         soldeMax:3,
// //     //         SoldeMin:0,
// //     //         gagnion:false,
// //     //         realTime:true,
// //     //         valide:false,
// //     //         joueur:"651ee759305ce08dada296b3"}
// //     //     }
// //     //     var ticket =  await  ticketSchema.create(obj.ticket)
        
    
       
        
// //     //     await joueurSchema.findByIdAndUpdate({ _id:obj.joueur.id}, { $push: { tikets: ticket._id } })
// //     //    var joueur = await joueurSchema.findByIdAndUpdate(obj.joueur.id,obj.joueur, { new: true })
// //     //     console.log({message:true,
// //     //               ticket:ticket,
// //     //               solde:joueur.solde
// //     //             })   
    
// //     // }
// //     // catch(error){
// //     //     console.log(error.message)   
// //     // }
// var joueurs = await joueurSchema.find();
// for (let i = 0; i < joueurs.length; i++) 
// {
//    joueurs[i].tikets=[]
//    await joueurs[i].save()
//         }
//     var tickets = await ticketSchema.find()
    
//         console.log(tickets,"tickets")
var joueurs1 = await joueurSchema.find();
console.log(joueurs1,"ee")  
   }
func()
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
        if(test==true){ var ticket =  await  ticketSchema.create(req.body.ticket)
        
            console.log(ticket,"t1")       
                  
                  await joueurSchema.findByIdAndUpdate({ _id:req.params.id}, { $push: { tikets: ticket._id } })
                  await adminSchema.findByIdAndUpdate({ _id:req.body.joueur.admin}, { $push: { tickets: ticket._id } })
                 var joueur = await joueurSchema.findByIdAndUpdate(req.params.id,req.body.joueur, { new: true })
                  res.send({message:true,
                            ticket:ticket._id,
                            solde:joueur.solde
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

router.post('/numeroGanyon/:id', async (req, res) => {
  
    
});
// cron.schedule('*/20 * * * * *', async () => {
//     console.log('running every minute 1, 2, 4 and 5');
//     ticketGlobale=[]
//    test=false
//    console.log(test)

   
    
 
 
//         var admins=  await adminSchema.find().populate('Listejoueurs')
//         //console.log(admins,1)
//                   var j=0
//     await admins.forEach( async (admin) => {
//             // console.log(admin.Listejoueurs,12)
            
//             var ticketsRealTime=[] 
//             var sommeTicketsPermanant=0
         
//             var somme =0
//             var ticketsGagnon=[]
//            var conditionGagnon=1
//            Listejoueurs=admin.Listejoueurs
//         //    console.log( Listejoueurs,'listJoueur')
//         //    j=j+1
//         //    console.log( j,'nombre de listes')
//         for (let i = 0; i < Listejoueurs.length; i++) {
//             // console.log("habib")
//            // console.log(Listejoueurs[i].tikets ,"15")
//             Listejoueurs[i].tikets.forEach( async (ticket_id) => {
//                 // console.log(ticket_id,"id tickets")
//                var ticket= await ticketSchema.findOne({_id:ticket_id})
               
               
//             //    console.log(ticket.realTime ,'boolean')
//                 if  ( ticket.realTime  ===  true){
                    
//                     await  ticketsRealTime.push(ticket)
                          
                    
                  
                  
//         //   console.log(ticketsRealTime ,'rrr')
//         //   sommeTicketsPermanant=sommeTicketsPermanant+ticket.solde
          
//         //  ticket.realTime=false
//         //   await ticket.save()
       
//                }
//                var obj={
//                 admin:admin._id,
//                 tiket:ticketsRealTime,
//                    }
                  
//                console.log(obj ,'yy')
//             })
         

//         }
//     //   const objet = {
//     //           admin:admin._id,
//     //           ticket:ticketsRealTime
//     //                    }
//     // await ticketGlobale.push(objet)
//                 // console.log(ticketGlobale ,'objet')  

//     //     for (let i =1 ; i < 37; i++) {
//     //        somme1=0
//     //        var ticketsGagnon1=[]
//     //        tickets.forEach(async (ticket) => {
            
//     //          await   ticket.condition.forEach(async (condition) => {
             
//     // var test = condition.condition.some((element) => element == i);
  
//     //                if(test==true){
//     //                 somme1=somme1+ condition.soldeGagner
                    
//     //                 ticketsGagnon1.push(ticket)
                 
                    

//     //                }
                  

//     //                console.log(condition ,1)
//     //                console.log(ticketsGagnon ,2)
           
//     //           })
//     //           });
//     //           console.log(somme1)
//     //           if(somme1 > somme &&  somme1 < sommeTicketsPermanant)
//     //                 {
//     //                  somme=somme1 
//     //                  ticketsGagnon=ticketsGagnon1
//     //                  conditionGagnon=i
//     //                   admin.resultatRoulette=i
//     //                   await admin.save()
//     //                 }
//     //         }
    
    
    
    
//             })  
             
//             console.log(ticketGlobale ,'finale')

   
//   });
module.exports = router;