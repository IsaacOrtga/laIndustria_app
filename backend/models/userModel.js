const db = require('../config/db');

const User = {
  create: async (userData) => {
    const sql = 'INSERT INTO user (name, lastname_1, lastname_2, email, password, phone, cif, address, postal_code, city, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const [result] = await db.execute(sql, Object.values(userData));
    return result;
  },
  
  findAll: async () => {
    const [rows] = await db.query('SELECT * FROM user');
    return rows;
  },
  
  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM user WHERE id = ?', [id]);
    return rows[0];
  },
  
  update: async (id, userData) => {
    const sql = 'UPDATE user SET name = ?, lastname_1 = ?, lastname_2 = ?, email = ?, password = ?, phone = ?, cif = ?, address = ?, postal_code = ?, city = ?, country = ? WHERE id = ?';
    const [result] = await db.execute(sql, [...Object.values(userData), id]);
    return result;
  },
  
  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM user WHERE id = ?', [id]);
    return result;
  }
};

module.exports = User;
