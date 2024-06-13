const db = require('../config/db');

const MenuItem = {
  getAll: async () => {
    try {
      const [results] = await db.query('SELECT * FROM menu_items');
      return results;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  getById: async (id) => {
    try {
      const [results] = await db.query('SELECT * FROM menu_items WHERE id = ?', [id]);
      return results[0];
    } catch (err) {
      throw new Error(err.message);
    }
  },

  create: async (menuItem) => {
    try {
      const [results] = await db.query('INSERT INTO menu_items SET ?', menuItem);
      return { id: results.insertId, ...menuItem };
    } catch (err) {
      throw new Error(err.message);
    }
  },

  update: async (id, menuItem) => {
    try {
      const [results] = await db.query('UPDATE menu_items SET ? WHERE id = ?', [menuItem, id]);
      return results;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  delete: async (id) => {
    try {
      const [results] = await db.query('DELETE FROM menu_items WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw new Error(err.message);
    }
  }
};

module.exports = MenuItem;
