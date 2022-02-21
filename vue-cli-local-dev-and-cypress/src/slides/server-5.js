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
    server.createList("todo", 10);
  },
  ...
});
