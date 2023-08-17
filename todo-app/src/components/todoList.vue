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
  data() {
    return {
      todos: [],
    };
  },
  created() {
    this.updateTodos();
  },
  methods: {
    updateTodos: function () {
      this.$http
        .get("https://vue-basic-64381-default-rtdb.firebaseio.com/todos.json")
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          let todoArray = [];
          for (let key in data) {
            if (!data[key].finished) {
              data[key].id = key;
              todoArray.push(data[key]);
            }
          }
          this.todos = todoArray;
        });
    },
  },
};
</script>

<style></style>
