const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();


const taskRouter = require('./routes/RegisterRouter');
const feedRouter = require('./routes/feedRouter');



app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(__dirname + '\\public'));
app.use('/api', taskRouter);
app.use('/api', feedRouter);


module.exports = app;