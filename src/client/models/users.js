const mongoose = require('mongoose')
const {
  Schema,
  model
} = mongoose

const UserSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  avatar: {
    type: String
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  }
})

module.exports = model('User', UserSchema)