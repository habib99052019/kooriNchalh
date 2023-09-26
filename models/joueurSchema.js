const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  joueurSchema  = new mongoose.Schema({
    name:String,
    lastName:String,
    pseudoName:String,
    login:{type:String , unique:true,match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid your login']},
    password:String,
    teleJoueur:String,
    tiket:[],
    tiketRealTime:[],
    solde:Number,
    admin:{ type: Schema.Types.ObjectId, ref:'adminSchema'},
  
   
    
  });
module.exports=mongoose.model('joueur',joueurSchema);