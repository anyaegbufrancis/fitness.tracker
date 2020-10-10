//Require the necessary modules
const router = require("express").Router();
const { db } = require("../models/model.js");
const Workout = require("../models/model.js");


//getLastWorkout grabs the DB data, injects total duration and sends to front end
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      let lastExercise = dbWorkout[dbWorkout.length-1]
      let totalDuration = 0;
      for (let i=0; i<lastExercise.exercises.length; i++) {
        totalDuration +=  (lastExercise.exercises[i].duration)
      }
      Object.assign(dbWorkout[dbWorkout.length-1], {totalDuration: totalDuration})      
     // console.log(dbWorkout[dbWorkout.length-1])
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//createWorkout grabs data from input and posts to DB
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//addExercise 'exercises' array for the workout activity (identified with __id)
router.put("/api/workouts/:id", (req, res) => {
  const filter = req.params.id
  const content = req.body
  Workout.updateOne({_id: filter}, {$push: {exercises: content}})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log("Error!!")
    });
});

//getWorkoutsInRange gets all workout and return s the result
router.get("/api/workouts/range", ({ body }, res) => {
  Workout.find({})
      .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;


