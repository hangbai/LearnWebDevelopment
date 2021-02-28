const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user: {type: String},
    password: {type: String},
  }, {versionKey: false} // 去除"__v":0
)

module.exports = mongoose.model('User',userSchema,'user')