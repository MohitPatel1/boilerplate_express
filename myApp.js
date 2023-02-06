let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");
const handler = (req,res)=>{
    // res.send("Hello Express")
    res.sendFile(__dirname+'/views/index.html')
} 

app.use('/public',express.static(__dirname+'/public'))
app.get('/',handler)
app.get('/json',(req,res)=>{
    if(process.env.MESSAGE_STYLE==='uppercase' ? message="HELLO JSON" : "Hello json"){
        res.json( {message} )
    }
})
module.exports = app;
