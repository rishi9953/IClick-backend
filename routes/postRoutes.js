const express = require('express');
const { createUserPost, getUserPosts } = require('../controllers/postController');

const router = express.Router();

// Define routes
router.post('/createPost', createUserPost);
router.get('/getPosts', getUserPosts);


module.exports = router;
