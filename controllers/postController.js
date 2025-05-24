const { addPosts, getAllPosts } = require('../models/postModel');

async function createUserPost(req, res) {
  try {
    const newUser = await addPosts(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getUserPosts(req, res) {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createUserPost, getUserPosts };