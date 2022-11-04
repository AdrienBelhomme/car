const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  carTitle: String,
  carBrand: String,
  rentPrice: Number,
  seatCapacity: Number,
  carType: String,
  Location: String,
  fuelCapacity: Number,
  steering: String,
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
