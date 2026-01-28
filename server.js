const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')

const testJwtRouter = require('./controllers/test-jwt')
const authRouter = require('./controllers/auth')
const userRouter = require('./controllers/users')
const hootsRouter = require('./controllers/hoots.js')

mongoose.connect(process.env.MONGODB_URI)
PORT = process.env.PORT

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/test-jwt', testJwtRouter)
app.use('/hoots', hootsRouter)

app.listen(PORT, () => {
    console.log('The express app is ready!')
})
