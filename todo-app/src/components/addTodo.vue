<template>
  <div id="add-todo">
    <form>
      <input
        type="text"
        v-model="todo.description"
        placeholder="添加新的待办"
      />
      <button v-on:click.prevent="post">+</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        description: "",
        star: false,
        finished: false,
      },
    };
  },
  methods: {
    post: function () {
      this.$http
        .post(
          "https://vue-basic-64381-default-rtdb.firebaseio.com/todos.json",
          this.todo
        )
        .then(function () {
          this.$emit("updateTodos");
          this.todo.description = "";
        });
    },
  },
};
</script>

<style></style>
