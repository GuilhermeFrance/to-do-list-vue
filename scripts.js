const todosApp = {
  data() {
    return {
      todos: [],
      newTodo: {
        done: false,
      },
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodo.text && this.newTodo.text.trim() !== "") {
        this.todos.push({
          text: this.newTodo.text.trim(),
          done: false,
        });
        this.newTodo = {
          text: "",
          done: false,
        };
      } else {
        alert("Você não pode adicionar uma tarefa vazia");
      }
    },
  },
};

Vue.createApp(todosApp).mount("#app");
