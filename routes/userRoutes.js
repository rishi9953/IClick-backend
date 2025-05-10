const express = require('express');
const { fetchAllUsers, createUser,fetchUser,editUser ,deleteUser} = require('../controllers/userController');

const router = express.Router();

// Define routes
router.get('/fetchUser', fetchAllUsers);
router.post('/createUser', createUser);
router.get('/getUser', fetchUser);
router.put('/updateUser', editUser);
router.delete('/deleteUser', deleteUser);



module.exports = router;
