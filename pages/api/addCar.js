// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// app.get('/addCar', (req, res) => {
//   console.log('testing!');
//   res.send('Hello from homepage.');
// });
// // app.get('/addCarForm', (req, res) => {
// //   res.sendFile(`${__dirname} + addCarForm.js`);
// // });

// // app.post('/addCarForm', (req, res) => {
// //   console.log('hi');
// // });

// app.listen(3000);
const express = require('express');

const router = express.Router();
const Car = require('./database');

// get back all the posts
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.json({ message: err });
  }
});
