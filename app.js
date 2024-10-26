const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/user');
const messagesRoutes = require('./routes/message')
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS");

  next();
});

app.use("/api/users", usersRoutes);
app.use("api/messages", messagesRoutes);
app.use('/api/auth', authRoutes);
module.exports = app;