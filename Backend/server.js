import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import posterRoute from "./routes/posterRoute.js";

dotenv.config();
const app = express();
app.use(express.json())

connectDB();
const PORT = process.env.PORT;

app.use('/api', posterRoute)


app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});


