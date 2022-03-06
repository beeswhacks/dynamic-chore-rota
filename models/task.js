var mongoose = require("mongoose");

var taskSchema = mongoose.Schema({
    weekNumber: {type: Number, required: true},
    cleaner: {type: String, required: true},
    room: {type: String, required: true},
    level: {type: String, required: true},
    status: {type: Boolean}
});

var Task = mongoose.model("Task", taskSchema);

module.exports = Task;