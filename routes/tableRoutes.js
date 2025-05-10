const express = require('express');
const { addTable, updateTable } = require('../controllers/tableController');

const router = express.Router();

// Define routes
router.post('/addTable', addTable);
router.post('/updateTable', updateTable);

module.exports = router;
