const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  joueurSchema  = new mongoose.Schema({
    name:String,
    lastName:String,
    pseudoName:String,
    email:String,
    password:String,
    teleJoueur:String,
    sex:String,
    imageJoueur:String,
    
  });
module.exports=mongoose.model('joueur',joueurSchema);