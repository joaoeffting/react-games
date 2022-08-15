import getDeckById from "../getDeckById";
import { POKEMON_DECK } from "../../components/Memory/decks/pokemon";
import { DIGIMON_DECK } from "../../components/Memory/decks/digimon";

describe("getDeckById tests", () => {
  it("Should return the POKEMON deck", () => {
    const deck = getDeckById("pokemon");
    expect(deck).toHaveLength(6);
    expect(deck).toMatchObject(POKEMON_DECK);
  });

  it("Should return the DIGIMON deck", () => {
    const deck = getDeckById("digimon");
    expect(deck).toHaveLength(6);
    expect(deck).toMatchObject(DIGIMON_DECK);
  });

  it("Should return the UNDEFINED if id doesn't exists", () => {
    const deck = getDeckById("sakura");
    expect(deck).toBe(undefined);
  });
});
