const router = require('express').Router();
let Robot = require('../models/robot.model');

router.route('/').get((req, res) => {
  Robot.find()
    .then(robots => res.json(robots))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const robotname = req.body.robotname;

  const newRobot = new Robot({robotname});

  newRobot.save()
    .then(() => res.json('Robot added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;