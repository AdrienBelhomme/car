const PostMessage = require('../models/carSchema');

const getPosts = async (req, res) => {
  try {
    const PostMessages = await PostMessage.find();

    console.log(PostMessages);
    res.status(200).json(PostMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

const getSpecficPost = async (req, res) => {
  console.log(req.params.postId);
  try {
    const specificPost = await PostMessage.findById(req.params.postId);
    res.status(200).json(specificPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const removePost = await PostMessage.remove({ _id: req.params.postId });
    res.status(200).json(removePost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const postUpdate = await PostMessage.updateOne(
      { _id: req.params.postId },
      { $set: { carTitle: req.body.carTitle } },
    );
    res.status(200).json(postUpdate);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getPosts, createPost, getSpecficPost, deletePost, updatePost };
