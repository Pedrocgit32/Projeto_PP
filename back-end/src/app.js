const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();

const taskRouter = require('./routes/taskRouter');
const loginRouter = require('./routes/loginRouter');

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());
app.use('/api', [

    taskRouter, 
    loginRouter]);

module.exports = app;