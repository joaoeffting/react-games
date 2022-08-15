import { SELECTORS } from "../../selectors";

const { homeLinkMobile, gamesLinkMobile, aboutLinkMobile, hamburgerMenu } =
  SELECTORS;

const VIEW_PORT_MOBILE = {
  width: 414,
  height: 896,
};

describe("Navigation Mobile", () => {
  beforeEach(() => {
    cy.viewport(VIEW_PORT_MOBILE.width, VIEW_PORT_MOBILE.height);
  });

  it("should navigate to the home page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(hamburgerMenu).click();
    cy.get(homeLinkMobile).click();
    cy.url().should("include", "/");
  });

  it("should navigate to the games page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(hamburgerMenu).click();
    cy.get(gamesLinkMobile).click();
    cy.url().should("include", "/games");
  });

  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(hamburgerMenu).click();
    cy.get(aboutLinkMobile).click();
    cy.url().should("include", "/about");
  });
});
