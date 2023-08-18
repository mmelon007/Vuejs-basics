<template>
  <div id="list">
    <div id="todo-list">
      <label>待办列表</label>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <button v-on:click.prevent="updateTodoState(todo)">完成</button>
          {{ todo.description }}
          <label v-on:click="changeStarState(todo)">star</label>
          <button v-if="!todo.star" v-on:click.prevent="deleteTodo(todo.id)">
            delete
          </button>
        </li>
      </ul>
    </div>
    <div id="done-list">
      <label>已办列表</label>
      <ul>
        <li v-for="done in dones" :key="done.id">
          {{ done.description }}
          <label v-if="done.star">star</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todos", "dones"],
  data() {
    return {};
  },
  methods: {
    changeStarState: function (todo) {
      todo.star = !todo.star;
      let id = todo.id;
      delete todo.id;
      this.$http
        .put(
          "https://vue-basic-64381-default-rtdb.firebaseio.com/todos/" +
            id +
            ".json",
          todo
        )
        .then(function (data) {
          console.log(data);
          this.$emit("updateTodos");
        });
    },
    deleteTodo: function (id) {
      this.$http
        .delete(
          "https://vue-basic-64381-default-rtdb.firebaseio.com/todos/" +
            id +
            ".json"
        )
        .then(function () {
          this.$emit("updateTodos");
        });
    },
    updateTodoState: function (todo) {
      todo.finished = !todo.finished;
      let id = todo.id;
      delete todo.id;
      this.$http
        .put(
          "https://vue-basic-64381-default-rtdb.firebaseio.com/todos/" +
            id +
            ".json",
          todo
        )
        .then(function (data) {
          console.log(data);
          this.$emit("updateTodos");
        });
    },
  },
};
</script>

<style></style>
