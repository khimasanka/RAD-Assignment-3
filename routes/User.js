const express = require('express');
const app = express();
const router = express.Router();

const Users = require('../models/user.models');

app.use(express.json);

router.get('/', async function (req, res) {
    try {
        const users = await Users.find();
        res.send(users)
    }catch (err){
        res.send('Error :' + err.message);
    }
});

module.exports = router