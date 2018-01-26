let chalk = require('chalk');

const app = require('./src/app');

// port
//Les deux premiers éléments de l'index argv sont utilisés par NODE.
const port = process.argv[2];

// start server here
app.listen(port)
console.log('Listenning on the port ' + port)
console.log(chalk.green('Hello web server'));
