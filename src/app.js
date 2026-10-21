import express from "express";
import morgan from "morgan";
import fs from "node:fs";
import path from "node:path";

import cardsRouter from "./modules/cards/cards.routes.js";

export const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(import.meta.dirname, "/logs", "access.log"),
  { flags: "as" },
);

app.use(morgan("combined", { stream: accessLogStream }));
app.use(express.json());

app.use("/cards", cardsRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Healthy" });
});
