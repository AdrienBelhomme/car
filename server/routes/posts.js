const express = require('express');
const { getPosts, createPost, getSpecficPost, deletePost, updatePost } = require('../controllers/posts');

const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
router.get('/:postId', getSpecficPost);
router.delete('/:postId', deletePost);
router.patch('/:postId', updatePost);

// export default router;
module.exports = router;
