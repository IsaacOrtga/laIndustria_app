
// models/specializationModel.js
const db = require('../config/db');

class Specialization {
  static getAll(callback) {
    db.query('SELECT * FROM specialization', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM specialization WHERE id = ?', [id], callback);
  }

  static create(newSpecialization, callback) {
    db.query('INSERT INTO specialization SET ?', newSpecialization, callback);
  }

  static update(id, updatedSpecialization, callback) {
    db.query('UPDATE specialization SET ? WHERE id = ?', [updatedSpecialization, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM specialization WHERE id = ?', [id], callback);
  }

  static assignTeacher(specId, teacherId, callback) {
    const sql = 'INSERT INTO teacher_specialization (teacher_id, specialization_id) VALUES (?, ?)';
    db.query(sql, [teacherId, specId], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  }
  
}

module.exports = Specialization;


module.exports = Specialization;
