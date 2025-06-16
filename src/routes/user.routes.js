import express from 'express';
import { registerUser } from '../controllers/user.controller.js';
let app = express.Router();

app.get("/", (req, res) => {
    res.send("API is running...");
  })
app.post("/register",registerUser)
export default app;