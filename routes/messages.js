const express = require('express');
const User = require('../models/user');
const Message = require('../models/message');
const Chatlist = require('../models/chatlist');

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    // find sender's chatlist, if exist
    const chatlist = await Chatlist.findOne({ owner: req.sender, userId: req.receiver });
    // create new message
    const message = new Message({
      sender: req.sender,
      receiver: req.receiver,
      text: req.text,
      hasRead: false,
      hasDelivered: false,
      isDeleted: false,
      isFavorite: false,
      date: new Date.now(),
      reply: null,
      reaction: null
    });

    const savedMessage = await message.save();

    if (!chatlist) {  // if not exist, create new chatlist
      const newChatlist = new Chatlist({
        userId: req.receiver,
        lastMessageId: savedMessage._id,
        unreadCount: 0,
        messages: [savedMessage],
        owner: req.sender
      });
      await newChatlist.save();
      res.status(200).json({
        message: 'message sent successfully!'
      })
    } else {  // if exist push message id
      const updatedChatlist = await Chatlist.findByIdAndUpdate(
        chatlist._id,
        { $push: { messages: savedMessage._id } }, // Add new message to the array
        { new: true } // Return the updated document
      );
    }
  } catch (err) {
    res.status(500).json({
      message: err
    })
  }
});

module.exports = router;