let express = require('express');
let app = express();

console.log("Hello World");
const handler = (req,res)=>{
    // res.send("Hello Express")
    res.sendFile(__dirname+'./views/index.html')
} 

app.get('/',handler)
module.exports = app;
