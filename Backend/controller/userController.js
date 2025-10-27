import UserModel from "../model/userModel.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new UserModel({
      userName: req.body.userName,
      password: req.body.password,
    });
    const savedData = await newUser.save(newUser);
    res.status(201).json({
      messege: "Saved Success",
      data: savedData,
    });
  } catch (err) {
    res.status(500).json({
      messege: "Save Failed",
      error: err.messege,
    });
  }
};
