// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/.env` });

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log(process.env.DB_CONNECTION);
});

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

module.exports = mongoose.model('Car', carSchema);
const Car = mongoose.model('Car', carSchema);

const firstCar = new Car({
  carTitle: 'Nissan GT - R',
  carBrand: 'Nissan',
  rentPrice: 80,
  seatCapacity: 2,
  carType: 'Sport',
  Location: 'blank-rn',
  fuelCapacity: 70,
  steering: 'Manual',
});

const secondCar = new Car({
  carTitle: 'Rolls - Royce',
  carBrand: 'BMW',
  rentPrice: 96,
  seatCapacity: 4,
  carType: 'Sedan',
  Location: 'blank-rn',
  fuelCapacity: 70,
  steering: 'Manual',
});

const thirdCar = new Car({
  carTitle: 'CR - V',
  carBrand: 'Honda',
  rentPrice: 80,
  seatCapacity: 6,
  carType: 'SUV',
  Location: 'blank-rn',
  fuelCapacity: 80,
  steering: 'Manual',
});

const fourthCar = new Car({
  carTitle: 'All New Rush',
  carBrand: 'Toyota',
  rentPrice: 72,
  seatCapacity: 6,
  carType: 'SUV',
  Location: 'blank-rn',
  fuelCapacity: 70,
  steering: 'Manual',
});

const fifthCar = new Car({
  carTitle: 'All New Terios',
  carBrand: 'Toyota',
  rentPrice: 90,
  seatCapacity: 6,
  carType: 'SUV',
  Location: 'blank-rn',
  fuelCapacity: 90,
  steering: 'Manual',
});

// Only use these line if you want to populate the database

// One entry:
// firstCar.save();

// Multiple Entries:
// Car.insertMany([firstCar, secondCar, thirdCar, fourthCar, fifthCar]);
