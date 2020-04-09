<template>
  <div id="app">
    <!-- <Header /> -->
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos1="todos" v-on:del-todo="deleteTodo" />
      <!-- <input type="file" @change="onFileSelected" />
      <button @click="onUpload"></button> -->
      <br />
      <br />
      <br />
      <div class="mb-5"></div>
   </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [],
      selectedFile: null,
      value: 0,
      query: false,
      show: true,
      interval: 0
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
    // onUpload() {},
    //   queryAndIndeterminate () {
    //     this.query = true
    //     this.show = true
    //     this.value = 0

    //     setTimeout(() => {
    //       this.query = false

    //       this.interval = setInterval(() => {
    //         if (this.value === 100) {
    //           clearInterval(this.interval)
    //           this.show = false
    //           return setTimeout(this.queryAndIndeterminate, 2000)
    //         }
    //         this.value += 25
    //       }, 1000)
    //     }, 2500)
    //   },
    },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => (this.todos = res.data))
      .catch(err => {
        console.log(err);
      });
  },
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

.scale-area h6 {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
}
.scale-area h6 {
  font-size: 11px;
}

.scale-area {
  text-align: left;
}
.scale {
  position: relative;
  display: block;
  margin-bottom: 8px;
  margin-top: 4px;
  background: #ffeb3b;
  height: 7px;
  width: 100%;
  overflow: hidden;
}

.scale-bar-1,
.scale-bar-2,
.scale-bar-3 {
  width: 100%;
  background: #f2f2f2;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.scale-bar-percent {
  display: none;
}

.dropzone-custom-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.dropzone-custom-title {
  margin-top: 0;
  color: #00b782;
}

.subtitle {
  color: #314b5f;
}
</style>
