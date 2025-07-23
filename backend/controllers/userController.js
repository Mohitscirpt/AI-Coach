// figma/backend/controllers/userController.js

const { getUsers } = require('../controllers/userController');

exports.getUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};