const { Client } = require("pg");

const client = new Client({
  user: "your_username",
  host: "localhost",
  database: "lowball_motors",
  password: "your_password",
  port: 5432,
});

client.connect()
  .then(() => console.log("Connected to the database"))
  .catch(err => console.error("Connection error", err.stack));

module.exports = client;