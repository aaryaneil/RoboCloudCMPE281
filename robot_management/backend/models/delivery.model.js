const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
  robotname: { type: String },
  description: { type: String},
  duration: { type: Number },
  date :{type:String,required: true},
  deliveryStatus:{
    type: String,
    enum: ["OPEN","DELIVERED","CANCELLED"],
  deliveryCompleted:{type:Date},
  deliveryStarted : {type:Date}
}
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;