const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trackingSchema = new Schema({
  robotname: {
    type: String,
    required: true,
},
  speed:{type: String},

  gps:{type:String}

}, {
  timestamps: true,
});

const Robot = mongoose.model('Robot', robotSchema);

module.exports = Robot;