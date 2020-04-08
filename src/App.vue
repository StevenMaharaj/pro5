<template>
  <div id="app">
    <Header />
    <AddTodo @add-todo="addTodo"/>
    <Todos :todos="todos" @del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
export default {
  name: "App",
  components: {
    Header, 
    Todos,
    AddTodo,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "todo One",
          completed: false
        },
        {
          id: 2,
          title: "todo two",
          completed: true
        },
        {
          id: 3,
          title: "todo Three",
          completed: false
        }
      ]
    };
  },
  methods: {
    deleteTodo(id) {
      this.todes = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo]
    }
  }
};
</script>

<style>
</style>
