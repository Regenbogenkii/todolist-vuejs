<template>
    <div class="row red-font">
        <div class="col-sm-1">
        <input type="checkbox" v-on:change="markComplete"> 
        </div>
           <div class="col-sm-7" v-bind:class="{'is-completed': todo2.completed}">
        <p>{{todo2.title}}: {{todo2.completed}}</p>
        </div>
           <div class="col-sm-1">
        <button class="btn btn-success" @click="$emit('del-todo', todo2.id)">X</button>
         </div>
    </div>
</template>

<script>
export default {
    name: "todoItem",
    props: ["todo2"],
    methods: {
        markComplete(){
            this.todo2.completed = !this.todo2.completed
        }
    }
}
</script>

<style scoped>
.red-font {
    color: green;
}
.is-completed {
    text-decoration: line-through;
    color: red;
}
.red-btn {
    background-color: red;
}
.d-inline {
    display: inline-flex;
}
</style>