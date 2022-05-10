const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
  robotname: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  deliveryStatus:{
    type: String,
    enum: ["OPEN","DELIVERED","CANCELLED"]
}
}, {
  timestamps: true,
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;