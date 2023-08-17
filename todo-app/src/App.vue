<template>
  <div id="app">
    <todo-list :todos="todos"></todo-list>
    <done-list :dones="dones"></done-list>
    <add-todo @updateTodos="updateTodoItems()"></add-todo>
  </div>
</template>

<script>
import todoList from "./components/todoList.vue";
import doneList from "./components/doneList.vue";
import addTodo from "./components/addTodo";

export default {
  name: "App",
  components: {
    "todo-list": todoList,
    "done-list": doneList,
    "add-todo": addTodo,
  },
  data() {
    return {
      todos: [],
      dones: [],
    };
  },
  created() {
    this.updateTodoItems();
  },
  methods: {
    updateTodoItems: function () {
      this.$http
        .get("https://vue-basic-64381-default-rtdb.firebaseio.com/todos.json")
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          let doneArray = [];
          let todoArray = [];
          for (let key in data) {
            data[key].id = key;
            if (data[key].finished) {
              doneArray.push(data[key]);
            } else {
              todoArray.push(data[key]);
            }
          }
          this.dones = doneArray;
          this.todos = todoArray;
        });
    },
  },
};
</script>

<style></style>
