import { POKEMON_DECK } from "./decks/pokemon";
import { DIGIMON_DECK } from "./decks/digimon";

const DECK_LIST = { pokemon: POKEMON_DECK, digimon: DIGIMON_DECK };

const getDeckById = (id) => {
  return DECK_LIST[id];
};

export default getDeckById;
