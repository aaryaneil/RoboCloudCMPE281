const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
<<<<<<< HEAD
  robotname: { type: String },
  description: { type: String},
  duration: { type: Number },
  date :{type:String,required: true},
  deliveryStatus:{
    type: String,
    enum: ["OPEN","DELIVERED","CANCELLED"],
  deliveryCompleted:{type:Date},
  deliveryStarted : {type:Date}
=======
  robotname: { type: String, required: true },
  description: { type: String, required: true },
  date :{type:String,required: true},
  deliveryStatus:{
    type: String,
    enum: ["ONGOING","DELIVERED"]
>>>>>>> 96d86dad21fdcec273d3ba7ec1b1dfdb418991c7
}
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;