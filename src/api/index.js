'use strict';

var express=require('express');
var Todo = require('../models/todo')

//var todos=require('../../public/mock/todos.json');

var router=express.Router();
//just for route testing purposes
router.get('/tarek',function(req,res){res.send("test tarek")});

router.get('/todos',function(req,res){
//the find method is a mongoose method that takes 2 parameters
//the first parameter is a json object (in this case empty)
//thus it will return all todos in the collection
//the second parameter is a callback function the first parameter is an error
//in case of an error return the status 500
//in case no error it will store the data in api/todos in the database
  Todo.find({}, function(err,todos){
    if (err){
      return res.status(500).json({message: err.message});
    }
    res.json({todos: todos});
    //the todo0 is a json object being created in /api/todos
});

});

//  add post route to create new entries on the api/todos url
// by default express does not have a body parser
// we have to install body-parser (npm install body-parser --save -E)

router.post('/todos',function(req,res){
  var todo = req.body;
  //Storing the todo in the database
  Todo.create(todo, function(err, todo){
    if (err){
      return res.status(500).json({err: err.message});
  }
  res.json({'todo': todo, message:'Todo Created'});
  })

});
//  add put route to update existing entries

router.put('/todos/:id',function(req,res){
  var id = req.params.id;
  var todo = req.body;
// checking if the todo exists
//and the todo id matches the one we are looking for
//if not it will return an err
  if(todo && todo._id !== id){
    return res.status(500).json({err: 'Ids dont match'});
  }
//finding  the todo by id in the database
//the first parameter is the id we want to find
// the second data is the new data we want to update
//we have to explicitly tell mongoose to return new data {new:true}
//if we do not mongo will return the old data and the data will not be updated
  Todo.findByIdAndUpdate(id, todo, {new:true}, function(err, todo){
    if (err){
      return res.status(500).json({err: err.message});
  }
  res.json({'todo': todo, message:'Todo Updated'});
  })

});
// delete route to delete entries
  router.delete('/todos/:id', function(req,res){
    var todoId= req.params.id;
    Todo.findByIdAndRemove(todoId,function(err,result){
      if (err){
        res.status(500).json({message: err.message});
      }
      else{
        res.json({message: 'Deleted Todo'});
      }
    });
  });

module.exports=router;
