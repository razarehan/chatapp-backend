const http = require('http');
const app = require('./app');
// const debug = require('debug')("node-angular");
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
dotenv.config();

connectDB();
app.set('port', port);
const server = http.createServer(app);

server.listen(port, ()=> {
    console.log("server is listening");
});