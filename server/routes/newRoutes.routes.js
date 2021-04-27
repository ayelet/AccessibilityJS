const express = require('express');
const route = new express.Router();
const newController = require('../controllers/newPost.controller');

route.post('/api/newPost', (req, res) => {
    newController.createNewPost(req, res);
})

module.exports = route;