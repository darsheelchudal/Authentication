import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/users.routes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import dbConnect from "./config/db.js";

dbConnect();

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//Pre - Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Server running  Hello user!!");
});
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`);
});

//Post - Middlewares
app.use(notFound);
app.use(errorHandler);
