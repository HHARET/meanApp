'use strict';
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo',function(err){
  if (err){console.log("error en database")}
  else{console.log("successfully connected to mongo");} {

  }
});
