const Item = require('../models/Category')

// handle new item posts

async function handlePost() {
    res.status(201).json('hit!!')
}

module.exports = {
    handlePost
}