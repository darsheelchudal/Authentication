import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/users.routes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import dbConnect from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dbConnect();

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//Pre - Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Server running user!!");
});
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`);
});

//Post - Middlewares
app.use(notFound);
app.use(errorHandler);
