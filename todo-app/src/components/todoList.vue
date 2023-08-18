<template>
  <div id="list">
    <div id="todo-list">
      <label class="title">待办列表</label>
      <ul class="items-list">
        <li v-for="todo in todos" :key="todo.id">
          <img
            v-on:click.prevent="updateTodoState(todo)"
            src="../assets/icons/unfinished.png"
          />
          <p>{{ todo.description }}</p>
          <img
            v-on:click="changeStarState(todo)"
            v-if="todo.star"
            src="../assets/icons/star_fill.png"
          />
          <img
            v-on:click="changeStarState(todo)"
            v-else
            src="../assets/icons/star.png"
          />
          <img
            class="delete-button"
            v-if="!todo.star"
            v-on:click.prevent="deleteTodo(todo.id)"
          />
        </li>
      </ul>
    </div>
    <div id="done-list">
      <label class="title">已办列表</label>
      <ul class="items-list done-list">
        <li v-for="done in dones" :key="done.id">
          <img src="../assets/icons/finished.png" />
          <p>{{ done.description }}</p>
          <img v-if="done.star" src="../assets/icons/star_fill.png" />
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
    getImg: function (flag) {
      return flag
        ? "../assets/icons/finished.png"
        : "../assets/icons/unfinished.png";
    },
  },
};
</script>

<style scoped>
.title {
  font-family: Gen Jyuu Gothic;
  font-size: 32px;
  font-weight: normal;
  height: 10vh;
  line-height: 10vh;
  letter-spacing: -0.41px;

  /* Green/#4E5851 */
  color: #4e5851;
  padding-left: 27px;
}
#list {
  height: 90vh;
  overflow-y: hidden;
}
.items-list {
  /* Green/#4E5851 task-bg */
  background: #dbddd7;
  height: 35vh;
  overflow-y: overlay;
}

ul {
  padding-left: 24px;
}

li {
  height: 7vh;
  list-style-type: none;
  font-family: Gen Jyuu Gothic;
  font-size: 18px;
  font-weight: normal;
  line-height: 7vh;
  letter-spacing: -0.03px;
  color: #4e5851;

  display: grid;
  grid-template-columns: 24px calc(100vw - 142px) 24px 24px;
  column-gap: 12px;
  justify-content: left;
}
li p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

li img {
  height: 24px;
  width: 24px;
  margin-top: auto;
  margin-bottom: auto;
}

button {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}

.delete-button {
  content: url("../assets/icons/delete.png");
}

.done-list {
  text-decoration: line-through;
}
</style>
