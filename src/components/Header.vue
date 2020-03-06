<template>
<div class="yellow-bg">
    <h1 >To Do List</h1>
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
</div>
</template>

<script>
export default {
   name: 'header' 
}
</script>

<style scoped>
.yellow-bg {
    background-color: yellow;
}
</style>