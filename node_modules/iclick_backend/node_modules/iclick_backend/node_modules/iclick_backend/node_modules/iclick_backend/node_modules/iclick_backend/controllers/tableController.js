const {createTable,updateSingleTable } = require('../models/tableModel');

async function addTable(req, res) {
    try {
      const newTable = await createTable(req.body);
      res.status(201).json(newTable);
      // res.status(201).json(req.body);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async function updateTable(req, res) {
    try {
      const newTable = await updateSingleTable(req.body);
      res.status(201).json(newTable);
      // res.status(201).json(req.body);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }



module.exports = {addTable,updateTable };