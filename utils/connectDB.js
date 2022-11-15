import mongoose from 'mongoose';

require('dotenv');

export const connectDB = async () => mongoose.connect(process.env.DB_CONNECTION);
