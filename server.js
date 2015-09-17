var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.use(express.static('.'));

var PersonService = require('./lib/services/PersonService').PersonService;
PersonService = new PersonService();

app.get('/', function (request, response) {
  
    console.log("got person:" + PersonService.getPerson());
    response.sendfile('index.html');
});

app.get('/test', function (request, response) {
  
    console.log("got person:" + JSON.stringify(PersonService.getPerson()));
});


app.listen(process.env.PORT, function () {
    console.log('Express server ' + process.env.PORT);
});