import { POKEMON_DECK } from "./decks/pokemon";

const DECK_LIST = { pokemon: POKEMON_DECK };

const getDeckById = (id) => {
  return DECK_LIST[id];
};

export default getDeckById;
