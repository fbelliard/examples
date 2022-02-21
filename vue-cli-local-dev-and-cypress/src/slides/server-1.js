createServer({
  routes() {
    this.namespace = "api";

    this.get("/todos", () => {
      return [
        { id: 1, text: "Trouver un titre (drôle ?)", isDone: false },
        { id: 2, text: "Rédiger", isDone: false },
        { id: 3, text: "Présenter", isDone: false },
      ];
    });
  },
});
