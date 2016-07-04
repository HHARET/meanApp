//this file (index.js) is created to be used with webpack and
//that is to avoid requiring too many scripts in the index.html file
//causing confusion in putting the <scripts> in the right order
// by using webpack we only put
// <script src="/scripts/vendor.bundle.js"></script> and
// <script src="/scripts/todo.bundle.js"></script>
'use strict';

var angular = require('angular');

angular.module('todoListApp')
       .directive('todo', require('./todo'));
