var express = require('express');

var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());

	var port = 8080;
    
    app.get('*', function(req, res){
    	res.end('Hello World');


    });

    Get/Url:
  app.listen(8080)
