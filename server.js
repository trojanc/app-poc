var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');



var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static('.'));

var RestServices = require('./src/rest/RestServices');
RestServices.initialise(app);

app.get('/application.js', function (request, response) {
  
  // If we are in dev mode, send the un-minified version
  
  // Else in prod send minified version
    response.sendFile(__dirname + '/dist/application.js');
});

app.get('/', function (request, response) {
  
    response.sendFile('index.html');
});


app.listen(process.env.PORT, function () {
    console.log('Express server ' + process.env.PORT);
});