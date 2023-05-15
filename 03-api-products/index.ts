import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { ProductsRouter } from "./routes/products.route";
import { sequelize } from "./config/database";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", ProductsRouter);

app.listen(process.env.PORT, async () => {
  console.log("App listening on port " + process.env.PORT);

  try {
    await sequelize.sync({ force: false });
  } catch (error) {
    console.log(error);
  }
});
