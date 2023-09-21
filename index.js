console.log("welcom mr taher")
const express = require('express')//obligtoir mil module express
var bodyParser = require('body-parser');//yrdha json mhma knyt yli jya
const app = express();//kima hekka express module  le routre
//activer les api
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
const port=1000//y
app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))
const connect = require('./dateBase/connect')

//routes
app.listen(port,()=>console.log('Server listen on the port ',port)) ;
