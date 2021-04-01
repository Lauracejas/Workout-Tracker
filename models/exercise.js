const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema ({
    type: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    totalDuration: {
        type: Number,
        required: true
    },
    numExercises: {
        type: Number,
        required: true
    },
    totalWeight: {
        type: Number,
        required: true
    },
    totalSets: {
        type: Number,
        required: true
    },
    totalReps: {
        type: Number,
        required: true
    },
    totalDistance: {
        type: Number,
        required: true
    },

})


const Exercise = mongoose.model("Exersise", ExerciseSchema);
module.exports = Exercise;