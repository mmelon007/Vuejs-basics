<template>
  <div id="app">
    <todo-list
      :todos="todos"
      :dones="dones"
      @updateTodos="updateTodoItems()"
    ></todo-list>
    <add-todo
      :isDisabled="isDisabled"
      @updateTodos="updateTodoItems()"
    ></add-todo>
  </div>
</template>

<script>
import todoList from "./components/todoList.vue";
import addTodo from "./components/addTodo";

export default {
  name: "App",
  components: {
    "todo-list": todoList,
    "add-todo": addTodo,
  },
  data() {
    return {
      todoItems: [],
      isDisabled: false,
    };
  },
  created() {
    this.updateTodoItems();
  },
  computed: {
    todos: function () {
      let todos = [];
      for (let item in this.todoItems) {
        if (!this.todoItems[item].finished) {
          todos.push(this.todoItems[item]);
        }
      }
      return todos;
    },
    dones: function () {
      let dones = [];
      for (let item in this.todoItems) {
        if (this.todoItems[item].finished) {
          dones.push(this.todoItems[item]);
        }
      }
      return dones;
    },
  },
  methods: {
    updateTodoItems: function () {
      this.todoItems = [];
      this.$http
        .get("https://vue-basic-64381-default-rtdb.firebaseio.com/todos.json")
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          for (let key in data) {
            data[key].id = key;
            this.todoItems.push(data[key]);
          }
        });
    },
  },
  watch: {
    todos: function () {
      if (this.todos.length >= 10) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    },
  },
};
</script>

<style>
#app {
  background: #EBEBE3;
}
</style>
