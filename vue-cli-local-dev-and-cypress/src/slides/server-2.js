createServer({
  models: {
    todo: Model,
  },
  seeds(server) {
    server.create("todo", { text: "Trouver un titre (drôle ?)", isDone: false });
    server.create("todo", { text: "Rédiger", isDone: false });
    server.create("todo", { text: "Présenter", isDone: false });
  },
  routes() {
    this.get("/todos", (schema) => {
      return schema.todos.all();
    });
  },
});
