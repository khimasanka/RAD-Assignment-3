const mongoose=require('mongoose');
const express=require('express');


const app=express();
const port=4000;

const url='mongodb://localhost/express';

mongoose.connect(url,{useNewUrlParser : true});
const con=mongoose.connection;

con.on("open",()=>{
    console.log("MongoDB Connected...!")
})
app.use(express.json())


app.listen(port,()=>{
    console.log(`App Starting on : ${port}`)
})