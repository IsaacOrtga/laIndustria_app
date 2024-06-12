// controllers/specializationController.js
const Specialization = require('../models/specializationModel');

exports.getSpecializations = (req, res) => {
  Specialization.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getSpecializationById = (req, res) => {
  Specialization.getById(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!result) {
      return res.status(404).json({ message: 'Specialization not found' });
    }
    res.json(result);
  });
};

exports.createSpecialization = (req, res) => {
  const newSpecialization = req.body;
  Specialization.create(newSpecialization, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json(result);
  });
};

exports.updateSpecialization = (req, res) => {
  const updatedSpecialization = req.body;
  Specialization.update(req.params.id, updatedSpecialization, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

exports.deleteSpecialization = (req, res) => {
  Specialization.delete(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Specialization deleted' });
  });
};
