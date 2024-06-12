const db = require('../config/db');

const Teacher = {
  getAll: (callback) => {
    const query = 'SELECT * FROM teacher';
    db.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },

  getById: (id, callback) => {
    const query = 'SELECT * FROM teacher WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  create: (teacher, callback) => {
    const query = 'INSERT INTO teacher SET ?';
    db.query(query, teacher, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, { id: results.insertId, ...teacher });
    });
  },

  update: (id, teacher, callback) => {
    const query = 'UPDATE teacher SET ? WHERE id = ?';
    db.query(query, [teacher, id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM teacher WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Teacher;
