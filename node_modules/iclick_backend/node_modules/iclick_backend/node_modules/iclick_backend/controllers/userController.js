const { getAllUsers, addUser, getUser, updateUser, deleteSingleUser } = require('../models/userModel');

// Get all users
async function fetchAllUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


async function fetchUser(req, res) {
  try {
    var value = '';
    if (req.body.id) {
      value = req.body.id;
    } else {
      value = req.body.name;
    }
    const users = await getUser(value);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Add a new user
async function createUser(req, res) {
  try {
    const newUser = await addUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function editUser(req, res) {
  try {
    if (!req.body.user_id) {
      res.status(500).json({ error: 'user_id is required' });

    }
    var userName = '';
    var name = '';
    var password = '';
    var user_id = req.body.user_id;

    const users = await getUser(user_id);
    if (req.body.username) {
      userName = req.body.username;
    } else {
      userName = users[0].username
    }
    if (req.body.name) {
      name = req.body.name;
    } else {
      name = users[0].name
    }

    if (req.body.password) {
      password = req.body.password;
    } else {
      password = users[0].password;
    }
    const data = { name: name, username: userName, password: password, user_id: user_id };

    const newUser = await updateUser(data);


    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

}

async function deleteUser(req, res) {
  try {
    if (!req.body.user_id) {
      res.status(500).json({ error: 'user_id is required' });

    }
    const newUser = await deleteSingleUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

}


module.exports = { fetchUser, createUser, fetchAllUsers, editUser, deleteUser };