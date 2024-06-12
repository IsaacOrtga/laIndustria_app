const Teacher = require('../models/teacherModel');
const Specialization = require('../models/specializationModel');

exports.getTeachers = (req, res) => {
  Teacher.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getTeacherById = (req, res) => {
  Teacher.getById(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!result) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.json(result);
  });
};

exports.createTeacher = (req, res) => {
  const newTeacher = req.body;
  const { specializations } = req.body;
  
  Teacher.create(newTeacher, (err, teacherResult) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (specializations && specializations.length > 0) {
      specializations.forEach(specId => {
        Specialization.assignTeacher(specId, teacherResult.id, (err, specResult) => {
          if (err) {
            console.error('Error assigning specialization:', err);
          }
        });
      });
    }

    res.status(201).json(teacherResult);
  });
};

exports.updateTeacher = (req, res) => {
  const updatedTeacher = req.body;
  Teacher.update(req.params.id, updatedTeacher, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.deleteTeacher = (req, res) => {
  Teacher.delete(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Teacher deleted' });
  });
};
