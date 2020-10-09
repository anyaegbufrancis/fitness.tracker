const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {    
    type: Number,
    default: new Date().setDate(new Date().getDate())
  },
  totalDuration: {    
    type: Number,
    default: 0
  },
  exercises: [{
  type: {
    type: String,
    required: "Select type"
  },
  name: {
    type: String,
    required: "Select Name"
  },
  duration: {
    type: Number,
    required: "Enter Duration"
  },
  weight: {
    type: Number,
    required: "Enter Weight"
  },
  reps: {
    type: Number,
    required: "Enter Reps"
  },  
  sets: {
    type: Number,
    required: "Enter Sets"
  },
  distance: {
    type: Number,
    required: "Enter Sets",
    default: 0
  },
}]
},
                                 {versionKey: false});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
