var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.use(express.static('.'));

var RestServices = require('./lib/rest/RestServices').RestServices;


RestServices = new RestServices(app);

app.get('/', function (request, response) {
  
    response.sendfile('index.html');
});


app.listen(process.env.PORT, function () {
    console.log('Express server ' + process.env.PORT);
});