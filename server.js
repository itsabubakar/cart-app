require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8080
const connectDB = require('./config/dbConn')
const cors = require('cors')



app.use(cors())
app.use(express.json())
connectDB()

app.use('/api', require('./routes/tasksRoutes'))

mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
    console.log('Connection to database succesful')
})

mongoose.connection.on('error', err => {
    console.log(err)
})