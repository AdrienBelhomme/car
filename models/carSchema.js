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
  /*

pickupLocation: string
dropOffLocation: string
availabilityFrom: date
availabilityTo: date
"description"
  */
});

mongoose.models = {};
const Car = mongoose.models.carSchema || mongoose.model('Car', carSchema);
module.exports = Car;
