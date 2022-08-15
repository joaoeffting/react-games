import { POKEMON_DECK } from "../components/Memory/decks/pokemon";
import { DIGIMON_DECK } from "../components/Memory/decks/digimon";

import { DeckListType, DeckType } from "../types/Deck.types";

const DECK_LIST: DeckListType = {
  pokemon: POKEMON_DECK,
  digimon: DIGIMON_DECK,
};

const getDeckById = (id: string): DeckType[] => {
  return DECK_LIST[id];
};

export default getDeckById;
