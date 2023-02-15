const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('List', listSchema)