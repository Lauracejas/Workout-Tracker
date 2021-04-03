const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day: {
		type: Date,
    default: Date.now
	},
	exercises: [
		{
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
			totalDuration: 0,
		},
	],
});

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;