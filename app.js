var express = require('express');
var app = express();

app.get('/',function(request,response){

    response.send('OK');
});

app.get('/cities',function(request,response){
    var cities = ['Lotopia','Caspania','Indigo'];
    response.json(cities);
});

module.exports = app;

