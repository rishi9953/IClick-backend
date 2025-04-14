const connection = require('../db/connection');

async function createTable(tableData) {
  return new Promise((resolve, reject) => {
    const { query } = tableData;
    console.log(tableData);
    console.log(query);
    connection.query(
      query
      , query,
      (err, results) => {
        if (err) {
          console.log('I am here');
          reject(err);

        } else {
          resolve(results);
        }
      }
    );
  });
}

async function updateSingleTable(tableData) {
  return new Promise((resolve, reject) => {
    const { query } = tableData;
    console.log(tableData);
    console.log(query);
    connection.query(
      query
      , query,
      (err, results) => {
        if (err) {
          console.log('I am here');
          reject(err);

        } else {
          resolve(results);
        }
      }
    );
  });
}

module.exports = { createTable, updateSingleTable };
