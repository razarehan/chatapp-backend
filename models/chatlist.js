const mongoose = require('mongoose');

const chatlistSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  lastMessageId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  unreadCount: {
    type: Number,
    required: true
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    }
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model('Chatlist', chatlistSchema);