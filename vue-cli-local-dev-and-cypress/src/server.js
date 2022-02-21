import { createServer, Factory, Model, RestSerializer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,
    serializers: {
      todo: RestSerializer.extend({
        root: false,
        embed: true,
        normalize(payload) {
          return {
            data: {
              type: "todos",
              attributes: {
                id: payload.id,
                text: payload.text,
                "is-done": payload.isDone,
              },
            },
          };
        },
      }),
    },
    models: {
      todo: Model,
    },
    factories: {
      todo: Factory.extend({
        text(i) {
          return `Tâche ${i + 1}`;
        },
        isDone: false,
      }),
    },
    seeds(server) {
      server.createList("todo", 1);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/todos");
      this.get("/todos/:id");
      this.delete("/todos/:id");
      this.post("/todos");
      this.patch("/todos/:id");
    },
  });

  return server;
}
