import dotenv from "dotenv";

import express from "express";
import cors from "cors";

import { authRouter } from "./routes/auth.routes";
import { connectDatabase } from "./config/database.config";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.listen(process.env.PORT, async () => {
  console.log(`Server is running on port ${process.env.PORT}`);

  await connectDatabase();
});
