import { generateDeck } from "../generateDeck";
import { POKEMON_DECK } from "../../components/Memory/decks/pokemon";
import { DIGIMON_DECK } from "../../components/Memory/decks/digimon";

describe("generateDeck testss", () => {
  it("Should return a deck with doubled length", () => {
    const deckPokemon = generateDeck(POKEMON_DECK);
    const deckDigimon = generateDeck(DIGIMON_DECK);
    expect(deckPokemon).toHaveLength(POKEMON_DECK.length * 2);
    expect(deckDigimon).toHaveLength(DIGIMON_DECK.length * 2);
  });
});
