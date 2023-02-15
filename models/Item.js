const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }
})

module.exports = mongoose.model('Item', itemSchema)