require("babel-core/register");

var express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static('dist'));

var RestServices = require('./src/rest/RestServices');
RestServices.initialise(app);


app.get('/', function (request, response) {
  
    response.sendFile('index.html');
});


app.listen(process.env.PORT, function () {
    console.log('Express server ' + process.env.PORT);
});