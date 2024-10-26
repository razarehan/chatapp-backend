const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  symbol: {
    type: String,
    required: true
  }
});

const messageSchema = mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  hasRead: {
    type: Boolean,
    required: true
  },
  hasDelivered: {
    type: Boolean,
    required: true
  },
  isDeleted: {
    type: Boolean,
    required: true
  },
  isFavorite: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  reply: {
    type: mongoose.Schema.Types.ObjectId
  },
  reactions: [reactionSchema]
});

module.exports = mongoose.model('Message', messageSchema);