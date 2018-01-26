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
        var message;
        var listNumbers = content.toString().trim().split('\r').join(',');
        
        console.log();

        if(req.query["mynumbers"] == undefined)
        {
            message = 'The bingo game is already started and known numbers are ' +   listNumbers;
        }
        else 
        {
            var myNumbersArray = req.query["mynumbers"].split(',');
            var listNumbersLength = listNumbers.split(',').length;
            var goodAnswer = 0;

            myNumbersArray.forEach(element => {
                if(listNumbers.indexOf(element) != -1) {
                    goodAnswer++;
                }
            });

            if(goodAnswer != listNumbersLength) {
                message = 'The bingo game is already started, sorry your numbers doesn\'t match with known numbers 31, 10, 80, 44, 66 ; so you can not say Bingo'
            }
            else
            {
                message =  'Bingo';
            }

        }

        res.send(message);
    });
});
