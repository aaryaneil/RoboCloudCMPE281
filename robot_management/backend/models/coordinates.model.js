const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coordinates = new Schema({

  value: {type: String}
  
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;