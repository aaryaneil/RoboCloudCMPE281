const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const robotSchema = new Schema({
  robotname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Robot = mongoose.model('Robot', robotSchema);

module.exports = Robot;