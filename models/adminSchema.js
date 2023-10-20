const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  adminSchema  = new mongoose.Schema({
    name:String,
    lastName:String,
    pseudoName:String,
    login:{type:String,unique:true},
    password:String,
    isSuperAdmin:Boolean,
    teleAdmin:String,
    resultatRoulette:Number,
    role:String,
    historique:[],
    roulette:{ type: Schema.Types.ObjectId, ref:'roulette'},
    solde:Number,
    prencentage:Number,
    Listejoueurs: [{ type: Schema.Types.ObjectId, ref:'joueurSchema'}],
    tickets: [{ type: Schema.Types.ObjectId, ref:'ticketSchema'}], 
    text1:String,
    text2:String,
    text3:String
});
module.exports=mongoose.model('adminSchema',adminSchema);