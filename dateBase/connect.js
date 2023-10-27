const mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://webmaster:webmaster123@cluster0.jc0r9.mongodb.net/backKoorea',
mongoose.connect('mongodb://webmaster:webmaster123@localhost/backKoorea',
{useNewUrlParser: true, 
useUnifiedTopology: true,
}).then(()=>console.log('Successfully connected to database.')).catch((e)=>console.error('Error in connection',e));

module.exports = mongoose;
//https://koorea1.onrender.com
