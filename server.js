const express = require('express');

const usersRouter = require('./router/users/users-router');

const server = express();
const cors = require('cors');
server.use(cors());
server.use(express.json());
server.use('/users',usersRouter);


module.exports = server;