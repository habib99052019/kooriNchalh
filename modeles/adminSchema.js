const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  adminSchema  = new mongoose.Schema({
    name:String,
    lastName:String,
    pseudoName:String,
    email:String,
    password:String,
    teleAdmin:String,
    role:String,
    imageAdmin:String,
    
  });
module.exports=mongoose.model('admin',adminSchema);