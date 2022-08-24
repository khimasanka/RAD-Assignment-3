const express = require('express');
const app = express();
const router=express.Router();

const User=require('../models/user.models')

app.use(express.json);


router.post('/', async (req, res) => {
    const surname = req.body.surname;
    const password = req.body.password;

    const user = await User.find();

    for (const i of user) {
        if (surname == i.surname && password === i.password) {
            res.json(i)
        } else {
            res.send("Incorrect Password")
        }
    }
});


module.exports = router