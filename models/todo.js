const mongoose = require('mongoose')
const Schema = mongoose.schema

const restaurantSchema = new Schema({
  name:{
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Todo', todoSchema)