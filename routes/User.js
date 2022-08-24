const express = require('express');
const app = express();
const router = express.Router();

const User = require('../models/user.models')
app.use(express.json());

router.get('/', async function (req, res) {
    try {
        const user = await User.find();
        res.json(user);
    } catch (err) {
        res.send(err.message);
    }
});

router.post('/', async (req, res) => {
    const user = new User({
        userId: req.body.userId,
        firstName: req.body.firstName,
        surname: req.body.surname,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    });
    try {
        const response = await user.save();
        res.json(response);
    } catch (err) {
        res.send(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    }catch (err) {
        res.send(err.message);
    }
})

router.delete('/',async function(req, res) {
    try {

    }catch (err) {
        res.send(err.message);
    }
})

module.exports = router