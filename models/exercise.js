const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    type: {
        type: String,
        trim: true,
        require: "Enter an excercise"
    },
    name: {
        type: String,
        trim: true,
        require: "Enter a name"
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    },

})


const Exercise = mongoose.model("exersise", exerciseSchema);
module.exports = Exercise;