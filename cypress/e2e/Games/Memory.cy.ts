import { SELECTORS } from "../../selectors";

const { gamesLink, memoryLink, pokemonGameLink, digimonGameLink } = SELECTORS;

describe("Navigation Desktop", () => {
  it("should navigate to the /memory/pokemon page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(gamesLink).click();
    cy.get(memoryLink).click();
    cy.get(pokemonGameLink).click();
    cy.url().should("include", "/memory/pokemon");
  });

  it("should navigate to the /memory/digimon page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(gamesLink).click();
    cy.get(memoryLink).click();
    cy.get(digimonGameLink).click();
    cy.url().should("include", "/memory/digimon");
  });
});
