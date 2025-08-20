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
        localStorage.setItem("todos" , JSON.stringify(this.todos))
      } else {
        alert("Você não pode adicionar uma tarefa vazia");
      }
    },
    storeTodos() {
      localStorage.setItem("todos" , JSON.stringify(this.todos))
      console.log('udpdated')
    }
  },
  created() {
  this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
}

};

Vue.createApp(todosApp).mount("#app");
