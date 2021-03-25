const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
      name: String,
      email: String,
      phoneNumber: Number,
      passWord: String,
      image: String,
      job: String
});

const User = mongoose.model('user', userSchema);
module.exports = User;