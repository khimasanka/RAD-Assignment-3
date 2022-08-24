const express = require('express');
const app = express();
const router = express.Router();

const User = require('../models/user.models')

app.use(express.json);

router.post('/', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.find();

        for (const i of user) {
            if (email === i.email && password === i.password) {
                res.json(i)
            } else {
                res.send("Incorrect Password")
            }
        }

    } catch (err) {
        res.send(err.message);
    }
});


module.exports = router