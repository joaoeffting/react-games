import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";

export default async function getAllGames(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();
  // const { id } = req.query;
  console.log("ERRO 1");
  const deck = await db.collection("decks").findOne({ deck_name: "pokemon" });
  console.log("ERRO 2", deck);
  if (deck) res.status(200).json(deck.deck);

  res.status(404).json({ message: "Deck not found" });
}
