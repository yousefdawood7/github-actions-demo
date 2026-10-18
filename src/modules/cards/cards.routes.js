import { Router } from "express";
import { CardsModel } from "./cards.model.js";

const router = Router();

router
  .route("/")
  .get(async (_req, res) => {
    const data = await CardsModel.find({});

    return res.status(200).json({
      message: "Data returned successfully",
      data,
    });
  })
  .post(async (req, res) => {
    if (!req.body.key || !req.body.value)
      return res.status(400).json({ message: "You must provide key && value" });

    const card = await CardsModel.create({
      key: req.body.key,
      value: req.body.value,
    });

    return res
      .status(201)
      .json({ message: "Card created successfully", data: card });
  });

router.route("/:cardId").get(async (req, res) => {
  const cardId = req.params.cardId;

  const card = await CardsModel.findById(cardId);

  // prettier-ignore
  if (!card)
    return res.status(404).json({ message: "Card is not exist" });

  return res.status(200).json({ message: "Card is already exist", data: card });
});

export default router;
