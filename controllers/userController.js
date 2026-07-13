const repository = require("../repositories/userRepository");

// GET /users
async function getUsers(req, res) {
  try {
    const users = await repository.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
}

// POST /users
async function addUser(req, res) {
  try {
    const { name, email } = req.body;

    const user = await repository.createUser(name, email);

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
}

module.exports = {
  getUsers,
  addUser,
};