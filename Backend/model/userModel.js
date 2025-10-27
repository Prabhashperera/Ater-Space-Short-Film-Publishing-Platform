import mongoose from "mongoose";

const userModel = mongoose.Schema({
  userName: String,
  password: String,
});

const User = mongoose.model("User", userModel);
export default User;
