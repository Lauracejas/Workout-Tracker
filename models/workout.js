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
			
		},
	],
},
	{
	toJSON: {
		// include any virtual properties when data is requested
		virtuals: true
	},
	},
);

workoutSchema.virtual("totalDuration").get(function() {
	return this.exercises.reduce((total, exercise) => {
	  return total + exercise.duration;
	}, 0);
  });

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;