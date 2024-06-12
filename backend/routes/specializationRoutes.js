// routes/specializationRoutes.js
const express = require('express');
const router = express.Router();
const specializationController = require('../controllers/specializationController');

router.get('/specializations', specializationController.getSpecializations);
router.get('/specializations/:id', specializationController.getSpecializationById);
router.post('/specializations', specializationController.createSpecialization);
router.put('/specializations/:id', specializationController.updateSpecialization);
router.delete('/specializations/:id', specializationController.deleteSpecialization);

module.exports = router;
