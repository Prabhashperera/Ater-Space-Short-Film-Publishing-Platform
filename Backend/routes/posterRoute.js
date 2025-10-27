import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  updatePost,
} from "../controller/posterController.js";

const posterRoute = express.Router();

posterRoute.post("/create", createPost);
posterRoute.get("/get", getAllPosts);
posterRoute.put("/update/:id", updatePost);
posterRoute.delete("/delete/:id", deletePost);

export default posterRoute;
