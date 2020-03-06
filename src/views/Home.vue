<template>
  <div id="app">
    <!-- <Header /> -->
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos1="todos" v-on:del-todo="deleteTodo" />
    <input type="file" @change="onFileSelected" />
    <button @click="onUpload"></button>
  </div>
</template>

<script>
// import Header from '../components/Header'
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";
export default {
  name: "Home",
  components: {
    // Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [],
      selectedFile: null
    };
  },
  methods: {
    deleteTodo(id) {
      // this.todos = this.todos.filter(ele => ele.id !== id);
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(
          res =>
            (this.todos = this.todos = this.todos.filter(ele => ele.id !== id))
        )
        .catch(err => {
          console.log(err);
        });
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      // this.todos = [...this.todos, newTodo]
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = this.todos = [...this.todos, res.data]))
        .catch(err => {
          console.log(err);
        });
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload(){

    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => (this.todos = res.data))
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btns {
  display: inline-block;
  background-color: violet;
}
</style>
