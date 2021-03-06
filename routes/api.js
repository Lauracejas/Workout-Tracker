const Workout = require("../models/workout.js");
const express = require("express");
const router = express.Router();

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
}); 

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.put("/api/workouts/:id", ( req, res) => {
    Workout.findByIdAndUpdate(
    req.params.id ,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }); 

module.exports = router;