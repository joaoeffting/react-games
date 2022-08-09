import { POKEMON_DECK } from "./decks/pokemon";
import { DIGIMON_DECK } from "./decks/digimon";

export type DeckType = {
  id: number;
  name: string;
  src: any;
}[];

export type DeckListType = {
  [key: string]: DeckType;
};

const DECK_LIST: DeckListType = {
  pokemon: POKEMON_DECK,
  digimon: DIGIMON_DECK,
};

const getDeckById = (id: string): DeckType => {
  return DECK_LIST[id];
};

export default getDeckById;
