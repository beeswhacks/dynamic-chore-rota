var express = require('express');
var Task = require('../models/task.js');
const {WEEK_NUMBER} = require('../modules/week_number.js');
var router = express.Router();

// When refresh button is pressed, create new set of tasks for this week if none exist
router.get('/refresh', function(req, res, next) {
  Task.updateOne(
    {weekNumber: WEEK_NUMBER, room: 'Kitchen'}, 
    {$setOnInsert:  
      {weekNumber: WEEK_NUMBER, 
      cleaner: 'Jack', 
      room: 'Kitchen', 
      status: false}},
    {upsert: true},
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  next();
});

router.get('/refresh', function(req, res, next) {
  Task.updateOne(
    {weekNumber: WEEK_NUMBER, room: 'Bathroom'}, 
    {$setOnInsert: 
      {weekNumber: WEEK_NUMBER, 
      cleaner: 'Faith', 
      room: 'Bathroom', 
      status: false}},
    {upsert: true},
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );    
  res.redirect('/');
});

// When home index is requested, show tasks for current week
router.get('/', function(req, res, next) {
  Task.find({weekNumber: WEEK_NUMBER}, 
    function(err, result) {
      if (err) {alert(err)}
      if (result) {
        return res.render('index', {tasks: result});
      }
    });
  }
);

// When 'Done' button is pressed, toggle task completion status
router.get('/task/:id', function(req, res) {
  Task.findById(req.params.id, function(err, task) {
    if (err) {console.error(err)};
    task.status = !task.status;
    task.save();
  });
  res.redirect('/');
});

module.exports = router;