const express = require('express');

const morgan = require('morgan');
const app = express();
const postRouter = require('./routers/postRouter');

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

//
app.use('/api/posts', postRouter);

module.exports = app;
