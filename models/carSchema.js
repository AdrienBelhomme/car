const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  // image
  carTitle: String,
  model: String,
  category: String,
  price: Number,
  people: Number,
  type: String,
  location: String,
  gas: Number,
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
