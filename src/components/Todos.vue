<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos1">
      <div class="card w-25 m-auto">
  <div class="card-body">
    <TodoItem v-bind:todo2="todo"  v-on:del-todo="$emit('del-todo', todo.id)" />
  </div>
</div>
      <!-- <h1>{{todo.title}}</h1> -->
    </div>
  </div>
</template>

<script>

import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
      TodoItem
  },
  props: ["todos1"]
};
</script>

<style scoped>
</style>