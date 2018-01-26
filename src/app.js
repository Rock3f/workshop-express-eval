var express = require('express');
var fs = require('fs');

const app = express();

module.exports = app;

app.get('/bingo', function(req, res) {
  //res.send('Bingo');

    var file = fs.readFile("./src/numbers.txt","utf8", (err, content) => {
        if(err) {
            return console.log(err);   
        }
        var listNumbers = content.toString().trim().split('\r').join(',');
        console.log(listNumbers);
    

        res.send(listNumbers);
    });
});
