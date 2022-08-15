import { SELECTORS } from "../../selectors";

const { homeLink, gamesLink, aboutLink } = SELECTORS;

describe("Navigation Desktop", () => {
  it("should navigate to the home page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(homeLink).click();
    cy.url().should("include", "/");
  });

  it("should navigate to the games page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(gamesLink).click();
    cy.url().should("include", "/games");
  });

  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(aboutLink).click();
    cy.url().should("include", "/about");
  });
});
