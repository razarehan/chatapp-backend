const express = require('express');

const router = express.Router();

router.get("/", (req, res, next)=>{
  res.status(200).json({
    message: 'chat app first http response!!!'
  })
});

module.exports = router;