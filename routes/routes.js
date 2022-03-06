var express = require('express');
var Task = require('../models/task.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Task.find(function(err, tasks) {
    if (err) { return next(err); }
    res.render('index', { tasks: tasks });
  });
});

module.exports = router;