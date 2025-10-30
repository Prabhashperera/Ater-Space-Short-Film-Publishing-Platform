import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import posterRoute from "./routes/posterRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";


dotenv.config();
const app = express();
app.use(express.json());

// ✅ Allow your frontend to talk to your backend
app.use(cors({
  origin: "http://localhost:5173", // your React app URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // only if you're sending cookies or auth tokens
}));

connectDB(); //Connect Mongo Atlas DB

app.use("/api/post", posterRoute);
app.use("/api/user", userRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
