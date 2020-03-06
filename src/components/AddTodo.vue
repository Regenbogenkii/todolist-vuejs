<template>
<div>
<form class="d-inline" @submit="onAddTodo">
    <input class="col-sm-8 form-control d-inline mb-3" v-model="title" type="text" name="title" placeholder="add to do....">
    <input type="submit" value="Submit" class="btns">
</form>
</div>
</template>
<script>
import uuid from 'uuid';
export default {
    name: "addTodo",
    data(){
        return {
            title: ''
        }
    },
    methods: {
        onAddTodo(e) {
            e.preventDefault();
            const newTodo = {
                // id: uuid.v4(),
                title: this.title,
                completed: false
            }
            this.$emit('add-todo', newTodo)
            this.title = '' //clear form
        }
    }
}
</script>
<style scoped>

</style>
