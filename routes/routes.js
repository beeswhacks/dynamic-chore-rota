var express = require('express');
var Task = require('../models/task.js');
const { weekNumber } = require('../modules/week_number.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  Task.updateOne(
    {weekNumber: weekNumber, room: 'Kitchen'}, 
    {$set: {weekNumber: weekNumber, cleaner: 'Jack', room: 'Kitchen', status: false}},
    {upsert: true},
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Updated Kitchen');
      }
    }
    );

  next();
});

router.get('/', function(req, res, next) {
  Task.updateOne(
    {weekNumber: weekNumber, room: 'Bathroom'}, 
    {$set: {weekNumber: weekNumber, cleaner: 'Faith', room: 'Bathroom', status: false}},
    {upsert: true},
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Updated Bathroom');
      }
    }
    );
    
  next();
});

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