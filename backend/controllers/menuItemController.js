const MenuItem = require('../models/menuItemModel');

exports.getMenuItems = async (req, res) => {
  try {
    const results = await MenuItem.getAll();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMenuItemById = async (req, res) => {
  try {
    const result = await MenuItem.getById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'MenuItem not found' });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMenuItem = async (req, res) => {
  try {
    const newMenuItem = req.body;
    const menuItemResult = await MenuItem.create(newMenuItem);
    res.status(201).json(menuItemResult);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const updatedMenuItem = req.body;
    const result = await MenuItem.update(req.params.id, updatedMenuItem);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    const result = await MenuItem.delete(req.params.id);
    res.json({ message: 'MenuItem deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
