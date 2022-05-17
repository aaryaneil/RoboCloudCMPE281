const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
  robotname: { type: String, required: true },
  description: { type: String, required: true },
  date :{type:String,required: true},
  deliveryStatus:{
    type: String,
    enum: ["ONGOING","DELIVERED"]
}
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;