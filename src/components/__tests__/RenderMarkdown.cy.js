import Markdown from "../Render/RenderMarkdown.vue";

describe("Markdown", () => {
  it("playground", () => {
    cy.mount(Markdown, { props: { markdown: "# Hello Cypress" } });
  });

  it("renders properly", () => {
    cy.mount(Markdown, { props: { markdown: "# Hello Cypress" } });
    cy.get("h1").should("contain", "Hello Cypress");
  });
});
