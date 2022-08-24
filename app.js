const mongoose = require('mongoose');
const express = require('express');

const user = require('./routes/User');
const login = require('./routes/login');
const posts = require('./routes/Posts');

const app = express();
const port = 4001;

const url = 'mongodb://127.0.0.1/express';

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;

con.on("open", () => {
    console.log("MongoDB Connected...!")
});

app.use(express.json());

app.use('/user', user);
app.use('/login', login);
app.use('/posts', posts);

app.listen(port, () => {
    console.log(`App Starting on : ${port}`);
});