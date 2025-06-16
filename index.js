import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src//utils/connectDB.js";
import userRoutes from "./src/routes/user.routes.js";

await connectDB();
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})
app.use("/api/users", userRoutes)


