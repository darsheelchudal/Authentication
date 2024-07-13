import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/users.model";

const protect = () =>
  asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = await User.findById(decoded.userId).select("-password");
        next();
      } catch (err) {
        res.status(401);
        throw new Error("Not authorized, invalid token");
      }
    } else {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  });

export { protect };
