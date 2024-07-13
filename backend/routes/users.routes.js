import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/users.controller.js";
import express from "express";
import { protect } from "../middleware/authMiddleware.js";

// ** api/users - Register the user     (POST)
// ** api/users/auth - Authenticate the user and get a token and a cookie (POST)
// ** api/users/logout - Clear the cookie and logout (POST)
// ** api/users/profile - Show user profile (GET)
// ** api/users/profile - Update user profile (PUT)

export const router = express.Router();

router.post("/users/auth", authUser);
router.post("/users", registerUser);
router.post("/users/logout", logoutUser);

router
  .route("/users/profile")
  .get(protect(), getUserProfile)
  .put(protect(), updateUserProfile);
