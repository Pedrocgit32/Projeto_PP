const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();

const taskRouter = require('./routes/taskRouter');

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());
app.use('/api', [

    taskRouter]);

module.exports = app;