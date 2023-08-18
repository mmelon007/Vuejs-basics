<template>
  <div id="add-todo">
    <form>
      <input
        type="text"
        v-model="todo.description"
        placeholder="添加新的待办"
        :disabled="isDisabled"
      />
      <img
        class="add-new-todo"
        v-on:click.prevent="post"
        :disabled="isDisabled"
      />
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

<style scoped>
#add-todo {
  height: 10vh;
}
form {
  margin: 2vh 15px;
  height: 6vh;
  display: grid;
  grid-template-columns: 80% 10%;
  column-gap: 5%;
}
input {
  width: 100%;
  border-radius: 8px;
  border: none;
  font-family: Gen Jyuu Gothic;
  font-size: 18px;
  font-weight: normal;
  line-height: 6vh;
  letter-spacing: -0.03px;
  color: #4e5851;
  display: inline;
  padding-left: 10px;
}

.add-new-todo {
  display: inline;
  width: 6vh;
  height: 6vh;
  content: url("../assets/icons/add.png");
}
</style>
