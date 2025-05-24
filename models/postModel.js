const connection = require('../db/connection');

async function addPosts(postData) {
    return new Promise((resolve, reject) => {
        const { title, description, createdAt } = postData;
        connection.query(
            'INSERT INTO db_user.posts (title, description, createdAt) VALUES (?, ?, ?)',
            [title, description, createdAt],
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

async function getAllPosts() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM db_user.posts', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}
module.exports = { addPosts, getAllPosts };