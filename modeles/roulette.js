const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  adminSchema  = new mongoose.Schema({
   numero:Number,
   historique:[{string}],
   ticket:[{ type: Schema.Types.ObjectId, ref:'ticketSchema'}],
   joueurs: [{ type: Schema.Types.ObjectId, ref:'joueurSchema'}]
 
    
});
module.exports=mongoose.model('admin',joueursSchema);