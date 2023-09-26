const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  adminSchema  = new mongoose.Schema({
   numero:Number,
   tiket:{ type: Schema.Types.ObjectId, ref:'ticketSchema'},
   solde:Number,
   type:String,
   coefficient:Number,
   gagnion:Boolean,
   joueur:{ type: Schema.Types.ObjectId, ref:'joueurSchema'}
 
    
});
module.exports=mongoose.model('admin',ticketSchema);
//aaa