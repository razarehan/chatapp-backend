const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  online: {
    type: String,
    required: true
  },
  chatlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chatlist",
    }
  ]
});

module.exports = mongoose.model('User', userSchema);