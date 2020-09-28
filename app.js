const express = require('express')

const mongoose = require('mongoose')
const app = express();
const PORT = 5000
const {MONGOURI} = require('./keys')

require('./models/user')

app.use(express.json()) //it should be above the routes handlers

app.use(require('./routes/auth'))// it should be below the route handlers




mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log('connected to mongo yeah!!')
})
mongoose.connection.on('error',(err)=>{
    console.log('error',err)
})


app.listen(PORT,()=>{
    console.log("server is running at localhost",PORT)
})