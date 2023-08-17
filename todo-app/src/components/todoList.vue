<template>
  <div id="todo-list">
    <label>待办列表</label>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos_prop: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      todos: this.todos_prop,
    };
  },
};
</script>

<style></style>
