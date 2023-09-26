const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  adminSchema  = new mongoose.Schema({
   numero:Number,
   condition:[{ type: Schema.Types.ObjectId, ref:'conditionSchema'}],
   solde:Number,
   gagnion:Boolean,
   joueur:{ type: Schema.Types.ObjectId, ref:'joueurSchema'}
 
    
});
module.exports=mongoose.model('admin',ticketSchema);