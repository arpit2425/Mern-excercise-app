const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const app = express()
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
app.listen(8000, () => {
  console.log('Server started')
})
