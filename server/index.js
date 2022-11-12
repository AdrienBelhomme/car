const express = require('express');

const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');

const postRoutes = require('./routes/posts');
const router = require('./routes/posts');
require('dotenv/config');

const app = express();

app.use(cors());
app.use(express.json(router));
app.use('/posts', postRoutes);

const PORT = 4000;
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

