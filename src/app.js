'use strict';
var express = require('express');
var parser = require('body-parser');
var router=require('./api');
app.set('port', (process.env.PORT || 5000));
var app= express();
require('./database');
require('./seed');
app.use('/',express.static('public'));
//this is the body-parser installed because express
//does not have a body-parser by default
app.use(parser.json());

app.use('/api',router);
app.listen(5000,function(){
  console.log("the server is runnning tarek")
});
