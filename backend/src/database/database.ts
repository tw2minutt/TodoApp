import pg from "pg";
import dotenv from "dotenv";
import { getTodos } from "./services/todo.service";

dotenv.config();
console.log("database.ts loaded");
const { Pool } = pg;

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// const result = await pool.query("SELECT * FROM todos");
// const insert = await pool.query("INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *", ["Test Todo", false])
// console.log("result.rows:", result.rows);
// console.log("insert.rows:", insert.rows);

pool.query("SELECT NOW()")
  .then((result) => {
    console.log("Database connected");
    console.log(result.rows[0]);
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

