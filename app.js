const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')

const connectDB = require('./config/db')

// Load Config 
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`))