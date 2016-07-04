'use strict';
var mongoose=require('mongoose');

var todoSchema = new mongoose.Schema({
  name: String, //todo.name
  completed: Boolean //todo.completed
});

var model = mongoose.model('Todo', todoSchema);
module.exports=model;
