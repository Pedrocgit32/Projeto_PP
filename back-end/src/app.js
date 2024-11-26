const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();


const taskRouter = require('./routes/registerRouter');
const feedRouter = require('./routes/feedRouter');
const markerRouter = require('./routes/markerRouter');


app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(__dirname + '\\public'));
app.use('/api', taskRouter);
app.use('/api', feedRouter);
app.use('/api', markerRouter);


module.exports = app;