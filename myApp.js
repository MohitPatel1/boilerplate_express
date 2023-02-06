let express = require('express');
let app = express();
require('dotenv').config()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended : false}))

console.log("Hello World");

app.use((req,res,next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    console.log("hello")
    next()

})

// app.get('/name',(req,res) => {
//     const { first , last } = req.query;
//     res.json({
//         name: `${first} ${last}`
//     })
// })
app.post('/name',(req,res) => {
    const { first , last } = req.body;
    res.json({
        name: `${first} ${last}`
    })
})

app.get('/:word/echo',(req,res) => {
    const { params } = req;
    res.json({echo: params.word})
})

app.get('/now',(req,res,next) => {
    req.time = new Date().toString()
    next();
},(req,res)=>{
    res.json({time: req.time})
})

app.use('/public',express.static(__dirname+'/public'))
const handler = (req,res)=>{
    // res.send("Hello Express")
    res.sendFile(__dirname+'/views/index.html')
} 
app.get('/',handler)
app.get('/json',(req,res)=>{
    if(process.env.MESSAGE_STYLE==='uppercase' ? message="HELLO JSON" : "Hello json"){
        res.json( {message} )
}})
module.exports = app;
