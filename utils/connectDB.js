<<<<<<< HEAD
import mongoose from 'mongoose';

require('dotenv');

const connection = {};

export const connectDB = async () => {
  if (connection.isConnected) {
    return;
  }

  console.log('DB connection', process.env.DB_CONNECTION);

  const db = await mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
};

// export const connectDB = async () => mongoose.connect(process.env.DB_CONNECTION);
=======
import mongoose from 'mongoose';

require('dotenv');

const connection = {};

export const connectDB = async () => {
  if (connection.isConnected) {
    return;
  }

  console.log('DB connection', process.env.DB_CONNECTION);

  const db = await mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
};

// export const connectDB = async () => mongoose.connect(process.env.DB_CONNECTION);
>>>>>>> 018c17997e9b031e6b83b24134466384802cc6d0
