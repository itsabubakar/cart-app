const Item = require('../models/Item')

// handle new item posts

async function handlePost(req, res) {
    console.log('api end point hit')
    const { name, category, notes } = req.body
    console.log(name, category)
    const item = await Item.create({ name, notes, category })
    console.log(item)
    if (item) { // Created 
        return res.status(201).json(item)
    } else {
        return res.status(400).json({ message: 'Invalid item data received' })
    }
}

module.exports = {
    handlePost
}