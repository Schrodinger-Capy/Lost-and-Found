const pool = require('../db');
const path = require('path');

exports.createItem = async (req, res) => {
  const { name, description, status, location, contact, phone } = req.body;

  try {
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const result = await pool.query(
      `INSERT INTO kartik_schema.items 
        (name, description, status, location, contact, phone, image)
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [name, description, status, location, contact, phone, image]
    );

    res.status(201).json(result.rows[0]); 
  } catch (err) {
    console.error("Error in createItem:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM kartik_schema.items ORDER BY created_at DESC'
    );
    res.status(200).json(result.rows); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, status, location, contact, phone } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : req.body.existingImage || null;

  try {
    const result = await pool.query(
      `UPDATE kartik_schema.items 
       SET name = $1, description = $2, status = $3, location = $4, contact = $5, phone = $6, image = $7
       WHERE id = $8 RETURNING *`,
      [name, description, status, location, contact, phone, image, id]
    );

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error in updateItem:", err);
    res.status(500).json({ error: err.message });
  }
};


exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM kartik_schema.items WHERE id = $1', [id]);
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
