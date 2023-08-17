<template>
  <div id="add-todo">
    <form>
      <input
        type="text"
        v-model="todo.description"
        placeholder="添加新的待办"
        :disabled="isDisabled"
      />
      <button v-on:click.prevent="post" :disabled="isDisabled">+</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["isDisabled"],
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
