<template>
  <div>
    <h1>Todos</h1>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  inject: ["todos"],
  created() {
    console.log(this.todos);
  }
};
</script>

<style scoped>
</style>