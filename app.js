const express = require('express')
const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const app = express()
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', ()=>{
  console.log('mongodb error')
})

db.once('open', ()=>{
  console.log('mongodb connected')
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, ()=>{
  console.log(`express is listening on http://localhost:3000`)
})