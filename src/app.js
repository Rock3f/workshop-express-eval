var express = require('express');

const app = express();

module.exports = app;

app.get('/home', function(req, res) {
  res.end('Hello World!');
})