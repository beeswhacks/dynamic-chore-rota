var mongoose = require("mongoose");

var taskSchema = mongoose.Schema({
    weekNumber: {type: Number, required: true},
    room: {type: String, required: true},
    cleaner: {type: String, required: true},
    status: {type: Boolean}
});

taskSchema.index({weekNumber: 1, room: 1})

var Task = mongoose.model("Task", taskSchema);

module.exports = Task;