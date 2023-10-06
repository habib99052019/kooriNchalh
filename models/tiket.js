const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  ticketSchema  = new mongoose.Schema({
   numero:Number,
   condition:[ ],
   solde:Number,
   soldeMax:Number,
   SoldeMin:Number,
   gagnion:Boolean,
   realTime:Boolean,
   valide:Boolean,
   joueur:{ type: Schema.Types.ObjectId, ref:'joueurSchema'}
 
    
});
module.exports=mongoose.model('ticketSchema',ticketSchema);