const mongoose = require('mongoose');
const Delivery = require('./delivery.model');

const Schema = mongoose.Schema;

const robotSchema = new Schema({
  robotname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  isAvailable:{type: Boolean,default:true,required:true},
   robottype:{type:String, required: true},
   logs:{
     type:[String]
   },

}, {
  timestamps: true,
});

const Robot = mongoose.model('Robot', robotSchema);

module.exports = Robot;