//this file is to create a seed data to test the application

'use strict';
var Todo= require('./models/todo.js');
var todos = [];

//this code will iterate through the todo array
//if there is no error and the todo does not exist it will create one
todos.forEach(function(todo,index){
  Todo.find({name:todo},function(err,todos){
// if we do not put the !todos.lengt condition each time
// the server restarts, it will create the same todo over and over again
    if(!err && !todos.lengt){
      Todo.create({completed: false, name: todo});
    }
  });
});
