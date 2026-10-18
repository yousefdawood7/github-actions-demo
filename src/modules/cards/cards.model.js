import { model, Schema } from "mongoose";

const cards = new Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
});

export const CardsModel = model("Cards", cards);
