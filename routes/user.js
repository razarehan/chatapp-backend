const express = require('express');
const User = require('../models/user');

router.get("/", async (req, res, next) => {
  const users = await User.find({});
  res.status(200).send(users);
});

module.exports = router;