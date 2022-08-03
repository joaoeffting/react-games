export const generateDeck = (chosenDeck) => {
  const newDeck = [];
  const deckNumber = chosenDeck.length * 2;
  chosenDeck.forEach((item) => {
    newDeck.push(item);
    newDeck.push({ ...item, id: item.id + deckNumber });
  });
  return newDeck;
};
