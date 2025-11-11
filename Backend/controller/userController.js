import UserModel from "../model/userModel.js"
import jwt from 'jsonwebtoken'

// Signup Function
export const signUp = async (req, res) => {
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

// Login Function
export const login = async (req, res) => {
  try {
    const userName = req.body.userName
    const password = req.body.password

    const isFound = await UserModel.findOne({userName})
    if(!isFound) {
      return res.status(403).json({messege: "User not Registered"})
    }
    if(isFound.password != password) {
      return res.status(403).json({messege: "You entered Wrong Password"})
    }
    const token = jwt.sign(
      {id: isFound._id, userName: isFound.userName},
      process.env.JWT_SECRET,
      {expiresIn: "1h"}
    )

    return res.status(200).json({ message: "Login Successful", token });

  }catch(error) {
    res.status(500).json({
    messege: "Login Failed",
    error: error.messege,
    });
  }
}

