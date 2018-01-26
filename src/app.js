var express = require('express');

const app = express();

module.exports = app;

app.get('/bingo', function(req, res) {
  res.end('Bingo');
})