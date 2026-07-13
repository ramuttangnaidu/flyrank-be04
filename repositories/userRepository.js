const pool = require("../config/db");

// Get all users
async function getAllUsers() {
  const result = await pool.query("SELECT * FROM users ORDER BY id");
  return result.rows;
}

// Add a new user
async function createUser(name, email) {
  const result = await pool.query(
    "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *",
    [name, email]
  );

  return result.rows[0];
}

module.exports = {
  getAllUsers,
  createUser,
};