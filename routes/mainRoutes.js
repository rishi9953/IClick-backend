const express = require('express');
const userRoutes = require('./userRoutes');
const tableRoutes = require('./tableRoutes');
const postRoutes = require('./postRoutes');

const router = express.Router();

// Route to user routes
router.use('/users', userRoutes);
router.use('/posts',postRoutes);
router.use('/tables', tableRoutes);



module.exports = router;