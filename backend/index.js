import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/users.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("Server running  Hello user!!");
});

app.use("/api/users", router);

app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`);
});
