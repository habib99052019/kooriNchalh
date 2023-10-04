const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  joueurSchema  = new mongoose.Schema({
    name:String,
    lastName:String,
    pseudoName:String,
    login:String,
    password:String,
    teleJoueur:String,
    tikets:[{ type: Schema.Types.ObjectId, ref:'ticketSchema'}],
    tiketRealTime:[],
    solde:Number,
    admin:{ type: Schema.Types.ObjectId, ref:'adminSchema'}
  
   
   
  });
module.exports=mongoose.model('joueurSchema',joueurSchema);