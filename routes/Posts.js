const express = require('express');
const app = express();
const router = express.Router();

const Posts = require('../models/post.models');
app.use(express.json());

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        res.json(posts);
    } catch (err) {
        res.send(err.message);
    }
});

router.post('/', async (req, res) => {
    const posts = new Posts({
        userId: req.body.userId,
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body
    });

    try {
        const response = await posts.save();
        res.json(response);
    } catch (err) {
        res.send(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        const response = await post.remove();

        res.json(response);
    } catch (err) {
        res.send(err.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        post.userId = req.body.userId;
        post.date = req.body.date;
        post.time = req.body.time;
        post.title = req.body.title;
        post.body = req.body.body;

        const response = await post.save();
        res.json(response);
    }catch (err){
        res.send(err.message);
    }
})

module.exports = router;