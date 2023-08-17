<template>
  <div id="app">
    <todo-list></todo-list>
    <done-list></done-list>
    <add-todo></add-todo>
  </div>
</template>

<script>
import todoList from "./components/todoList.vue";
import doneList from "./components/doneList.vue";
import addTodo from './components/addTodo';

export default {
  name: "App",
  components: {
    "todo-list": todoList,
    "done-list": doneList,
    "add-todo": addTodo
  },
  data (){
    return {

    }
  }
};
</script>

<style></style>
