var express = require('express');
var Task = require('./models/task');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Task.find()
  .exec(function(err, users){
    if (err) { return next(err); }
    res.render('index', { title: 'Express' });
  });
});

module.exports = router;