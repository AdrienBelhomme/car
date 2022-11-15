import { connectDB } from '../../utils/connectDB';
import Car from '../../models/carSchema';

export default async function hello(req, res) {
  console.log('connecting to mongo');
  await connectDB();
  console.log('connecting to mongo');

  console.log('Creating document');
  const test = await Car.find();
  console.log('Created document');

  res.json({ test });
}
