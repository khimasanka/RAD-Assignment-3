const express=require('express');
const mongoose=require('mongoose');
const login = require('./routes/login');
const user = require('./routes/user');

const app=express();
const port=4000;

app.use('/login',login);
app.use('/user',user);

const url='mongodb://127.0.0.1/express';

mongoose.connect(url,{useNewUrlParser : true},(err)=>{
    if (err){
        console.log(err.message);
    }else {
        console.log("Mongoose Connected");
    }
});
const con=mongoose.connection

con.on("open",()=>{
    console.log("MongoDB Connected...!")
})
app.use(express.json())


app.listen(port,()=>{
    console.log(`App Starting on : ${port}`)
})