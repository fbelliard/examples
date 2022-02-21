import { makeServer } from "../../src/server";

let server;

beforeEach(() => {
  server = makeServer({ environment: "test" });
});

afterEach(() => {
  server.shutdown();
});

it("should have one task", () => {
  server.create("todo");

  cy.visit("/");

  cy.get('ul > li').should("have.length", 1);
});
