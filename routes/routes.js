var express = require('express');
var Task = require('../models/task.js');
const { weekNumber } = require('../public/javascripts/week_number.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Try to find tasks with the corresponding week number
  Task.find({weekNumber: weekNumber}, function(err, result) {
    if (err) {alert(err)}
    if (result) {
      return res.render('index', {tasks: result});
    }
  });
});

module.exports = router;