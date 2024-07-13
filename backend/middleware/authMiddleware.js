import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/users.model.js";
import dotenv from "dotenv";

dotenv.config();

const protect = () =>
  asyncHandler(async (req, res, next) => {
    console.log("Protect middleware executed");
    const token = req.cookies.jwt;
    console.log("Token:", token);
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log("Decoded:", decoded);
        req.user = await User.findById(decoded.userId).select("-password");
        console.log("User:", req.user);
        next();
      } catch (err) {
        console.log("Error:", err);
        res.status(401);
        throw new Error("Not authorized, invalid token");
      }
    } else {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  });

export { protect };
