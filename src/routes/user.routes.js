import express from 'express';
import { registerUser,loginUser } from '../controllers/user.controller.js';
let app = express.Router();

app.get("/", (req, res) => {
    res.send("API is running...");
  })
app.post("/register",registerUser)

app.post("/login",loginUser)
export default app;