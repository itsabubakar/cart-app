require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
    console.log('Connection to database succesful')
})

mongoose.connection.on('error', err => {
    console.log(err)
})