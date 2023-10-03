const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const   roulette = new mongoose.Schema({
   numero:Number,
   historique:[{string}],
   admin:{ type: Schema.Types.ObjectId, ref:'adminSchema'},
   ticket:[{ type: Schema.Types.ObjectId, ref:'ticketSchema'}],
   joueurs: [{ type: Schema.Types.ObjectId, ref:'joueurSchema'}]
 
    
});
module.exports=mongoose.model('roulette',roulette);