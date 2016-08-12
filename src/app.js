'use strict';
var express = require('express');
var parser = require('body-parser');
var router=require('./api');

var app= express();
require('./database');
require('./seed');

app.set('port',(process.env.PORT || 4000));

app.use('/',express.static('public'));
//this is the body-parser installed because express
//does not have a body-parser by default
app.use(parser.json());

app.use('/api',router);
app.listen(app.get('port'),function(){
  console.log("the server is runnning tarek")
});
