// server.js
const express = require("express");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const { Client } = require("pg");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Database connection setup
const client = new Client({
  user: process.env.DB_USER, // From .env file
  host: process.env.DB_HOST, // From .env file
  database: process.env.DB_NAME, // From .env file
  password: process.env.DB_PASSWORD, // From .env file
  port: process.env.DB_PORT, // From .env file
});

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Database connection error:", err.stack));

// Registration route
app.post("/api/auth/register", async (req, res) => {
  const { email, password, role } = req.body;
  try {
    // Validate input
    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    const result = await client.query(
      "INSERT INTO users (email, password, role) VALUES ($1, $2, $3) RETURNING *",
      [email, hashedPassword, role]
    );

    res.status(201).json({
      message: "User registered successfully!",
      user: {
        id: result.rows[0].id,
        email: result.rows[0].email,
        role: result.rows[0].role,
      },
    });
  } catch (err) {
    if (err.code === "23505") {
      // Unique constraint violation (duplicate email)
      res.status(400).json({ message: "Email already exists!" });
    } else {
      console.error("Error registering user:", err.stack);
      res.status(500).json({ message: "Error registering user." });
    }
  }
});

// Fetch all users
app.get("/api/users", async (req, res) => {
  try {
    const result = await client.query("SELECT id, email, role FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching users:", error.stack);
    res.status(500).json({ message: "Error fetching users." });
  }
});

// Update a user's role
app.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  try {
    if (!role) return res.status(400).json({ message: "Role is required!" });

    const result = await client.query(
      "UPDATE users SET role = $1 WHERE id = $2 RETURNING id, email, role",
      [role, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.json({
      message: "User updated successfully!",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Error updating user:", error.stack);
    res.status(500).json({ message: "Error updating user." });
  }
});

// Delete a user
app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await client.query(
      "DELETE FROM users WHERE id = $1 RETURNING id, email, role",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.json({
      message: "User deleted successfully!",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Error deleting user:", error.stack);
    res.status(500).json({ message: "Error deleting user." });
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));