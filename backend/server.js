const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const app = express()
const userRoute = require('./routes/userRoute')
const excerciseRoute = require('./routes/excerciseRoute')
require('dotenv').config()
app.use(cors())
app.use(express.json())
const uri = process.env.URI

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database Connected'))
app.use('/exercises', excerciseRoute)
app.use('/users', userRoute)
app.listen(8000, () => {
  console.log('Server started')
})
