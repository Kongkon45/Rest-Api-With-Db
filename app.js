const express = require('express');
const userRouter = require('./routes/users.route')
const cors = require('cors');
require('./config/db')

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use("/api/users/", userRouter)


// home route 
app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/./views/index.html")
})

// route not found error 
app.use((req, res, next)=>{
    res.status(404).json({message : "This url is not found"})
})

// server error 
app.use((err, req, res, next)=>{
    res.status(500).json({message : "Server somethings broken"})
})

module.exports = app;