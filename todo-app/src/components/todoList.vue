<template>
  <div id="todo-list">
    <label>待办列表</label>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.description }}
        <label v-on:click="changeStarState(todo)">star</label>
        <button v-if="!todo.star">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  data() {
    return {};
  },
  methods: {
    changeStarState: function (todo) {
      todo.star = !todo.star;
    },
  },
};
</script>

<style></style>
