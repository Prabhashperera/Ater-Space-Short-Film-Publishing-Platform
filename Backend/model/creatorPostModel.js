import mongoose from "mongoose";

const creatorPostModel = mongoose.Schema({
  title: String,
  description: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  releaseDate: Date,
  duration: String, // e.g., "2h 15m"
  genre: [String],
  posterUrl: String,
  videoUrl: String,
  createdAt: { type: Date, default: Date.now },
});

const CreatorPost = mongoose.model("creatorPost", creatorPostModel);
export default CreatorPost;
