import { DeckType } from "../types/Deck.types";

export const generateDeck = (chosenDeck: DeckType[]): DeckType[] => {
  const newDeck: DeckType[] = [];
  const deckNumber = chosenDeck.length * 2;
  chosenDeck.forEach((item) => {
    newDeck.push(item);
    newDeck.push({ ...item, id: item.id + deckNumber });
  });
  return newDeck;
};
