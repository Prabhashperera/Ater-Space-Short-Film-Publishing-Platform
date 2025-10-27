import express from "express";
import {
  createPost,
  getAllPosts,
  updatePost,
} from "../controller/posterController.js";

const posterRoute = express.Router();

posterRoute.post("/create", createPost);
posterRoute.get("/get", getAllPosts);
posterRoute.put("/update/:id", updatePost);

export default posterRoute;
