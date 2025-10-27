import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import posterRoute from "./routes/posterRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB(); //Connect Mongo Atlas DB

app.use("/api/post", posterRoute);
app.use("/api/user", userRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
