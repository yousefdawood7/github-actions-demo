import express from "express";
import morgan from "morgan";
import cardsRouter from "./modules/cards/cards.routes.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/cards", cardsRouter);
