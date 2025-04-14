const connection = require('../db/connection');

// Fetch all users
async function getAllUsers() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM db_user.users_details', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}
async function getUser(value) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM db_user.users_details where user_id = '${value}' or username = '${value}' or name = '${value}'`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Add a new user
async function addUser(userData) {
  return new Promise((resolve, reject) => {
    const { name, username, password } = userData;
    connection.query(
      'INSERT INTO db_user.users_details (name, username, password) VALUES (?, ?, ?)',
      [name, username, password],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
}

// Update a user
async function updateUser(userData) {
  return new Promise((resolve, reject) => {
    const { name, username, password, user_id } = userData;
    connection.query(
      'UPDATE db_user.users_details set name = ?, username = ?, password = ? WHERE user_id = ?',
      [name, username, password, user_id],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
}

// Delete a user
async function deleteSingleUser(userData) {
  return new Promise((resolve, reject) => {
    const {user_id } = userData;
    connection.query(
      'DELETE FROM db_user.users_details WHERE user_id = ?',
      // 'DELETE FROM db_user.users_details set name = ?, username = ?, password = ? WHERE user_id = ?',
      [user_id],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
}
module.exports = { getAllUsers, addUser, getUser, updateUser, deleteSingleUser };
