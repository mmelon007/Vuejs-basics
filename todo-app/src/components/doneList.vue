<template>
  <div id="done-list">
    <label>已办列表</label>
    <ul>
      <li v-for="done in dones" :key="done.id">
        {{ done.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dones: [],
    };
  },
  created() {
    this.updateDones();
  },
  methods: {
    updateDones: function () {
      this.$http
        .get("https://vue-basic-64381-default-rtdb.firebaseio.com/todos.json")
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          let doneArray = [];
          for (let key in data) {
            if (data[key].finished) {
              data[key].id = key;
              doneArray.push(data[key]);
            }
          }
          this.dones = doneArray;
        });
    },
  },
};
</script>

<style></style>
