const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const pool = new Pool({
  user: "goldswiper_qa_app",
  host: "goldswiper-postgres-qa.rupeek.co",
  database: "goldswiper_qa",
  password: "RL0c1AvLxV786sNs",
  port: 12032, // Default PostgreSQL port
});

pool.connect((err) => {
  if (err) {
    console.error("Error connecting to the PostgreSQL database:", err);
  } else {
    console.log("Connected to PostgreSQL database");
  }
});

// Define your PostgreSQL schema
const userTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    fname VARCHAR(255),
    lname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
  );
`;

pool.query(userTableQuery, (err, result) => {
  if (err) {
    console.error("Error creating users table:", err);
  } else {
    console.log("Users table created (or already exists)");
  }
});

// Routes
// Define your API routes for interacting with the PostgreSQL database here


app.listen(8000, () => {
  console.log("Server starting at 8000");
});
