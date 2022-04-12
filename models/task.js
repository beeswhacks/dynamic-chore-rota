var mongoose = require("mongoose");

var taskSchema = mongoose.Schema({
    weekNumber: {type: Number, required: true},
    room: {type: String, required: true},
    cleaner: {type: String, required: true},
    status: {type: Boolean}
});

taskSchema.index({weekNumber: 1, room: 1})

taskSchema.virtual('completionStatus').get(function() {
    var completed;
    if (this.status == true) {
        completed = 'done';
    } else if (this.status == false) {
        completed = 'not done yet';
    };
    return completed;
})

var Task = mongoose.model("Task", taskSchema);

module.exports = Task;