import mongoose from "mongoose";

const userModel = mongoose.Schema({
  userName: String,
  company: String,
  password: String,
});

const User = mongoose.model("User", userModel);
export default User;
