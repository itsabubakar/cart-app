const Item = require('../models/Item')

// handle new item posts

async function handlePost(req, res) {
    console.log('api end point hit')
    const { name, category, notes } = req.body
    console.log(name, category);


    // Check for duplicate item
    const duplicate = await Item.findOne({ name }).lean().exec()

    if (duplicate) {
        console.log(duplicate)
        return res.status(400).json('Item already exists')
    }

    const item = await Item.create({ name, notes, category })
    if (item) { // Created 
        return res.status(201).json(item)
    } else {
        return res.status(400).json({ message: 'Invalid item data received' })
    }
}

// get  categories posts

async function getItem(req, res) {

    const items = await Item.find().lean().exec()

    if (items) { // Created 
        return res.status(201).json(items)
    } else {
        return res.status(400).json({ message: 'error, unable to fetch items' })
    }
}

// get items in categories

async function getCategoryItems(req, res) {
    console.log('category end point hit')
    const { data } = req.body

    console.log(data)

    const item = await Item.find({ category: data }).lean().exec()
    console.log(item)

    if (item) { // exists 

        return res.status(201).json(item)
    } else {
        return res.status(400).json({ message: 'error, unable to fetch item' })
    }
}

module.exports = {
    handlePost, getItem, getCategoryItems
}