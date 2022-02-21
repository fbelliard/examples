createServer({
  models: {
    todo: Model,
  },
  factories: {
    todo: Factory.extend( {
      text(i) {
        return `Tâche ${i + 1}`;
      },
      isDone: false
    })
  },
  seeds(server) {
    server.create("todo");
    server.create("todo", { text: "Rédiger", isDone: false });
    server.create("todo");
  },
  ...
});
