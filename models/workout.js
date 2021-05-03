const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const excerciseSchema = new Schema ({
    type: {
        type: String, 
        required: "Type is required"
    },
    name: {
        type: String, 
        trim: true,
        required: "Name is required"
    },
    duration: {
        type: Number, 
        trim: true,
        required: "Duration is required"
    },
    weight: Number,
    reps: Number, 
    sets: Number, 
    distance: Number,  
});

const workoutSchema = new Schema({
    day: {
        type: Date, 
        default: Date.now()
    },
    exercises: [ excerciseSchema]
});

const Workout = mongoose.model("Workout, workoutSchema");
module.exports = Workout;