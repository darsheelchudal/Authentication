import asyncHandler from "express-async-handler";
import User from "../models/users.model.js";
import generateToken from "../utils/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Request body", req.body);

  const userExists = await User.findOne({ email });
  console.log(userExists);

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({ name, email, password });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: "User logged out" });
  } catch (err) {
    console.log("Error", err);
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get User profile" });
});
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
