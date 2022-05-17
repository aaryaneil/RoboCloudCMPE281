const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
  robotname: { type: String, required: false },
  description: { type: String, required: false },
  coordinate : {type: String, required: true},
  order_id : {type: String, required: true},
      duration: { type: Number, required: false },
  date :{type:String,required: false},
  deliveryStatus:{
    type: String,
    enum: ["OPEN","DELIVERED","CANCELLED"]
}
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;

