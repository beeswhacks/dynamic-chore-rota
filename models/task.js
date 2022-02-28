var mongoose = require("mongoose");
var taskSchema = mongoose.Schema({
    weekNumber: {type: Number, required: True},
    cleaner: {type: String, required: True},
    status: {type: Boolean}
});