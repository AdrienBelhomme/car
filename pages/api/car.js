import { connectDB } from '../../utils/connectDB';
import Car from '../../models/carSchema';

export default async function handler(req, res) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case 'GET':
      try {
        const users = await Car.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const user = await Car.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // case 'DELETE':
    //   try {
    //     const removePost = await Car.remove({ _id: req.params.postId });
    //     res.status(200).json(removePost);
    //   } catch (error) {
    //     res.status(404).json({ message: error.message });
    //   }
    //   break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
