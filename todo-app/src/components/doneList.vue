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
  props: {
    dones_prop: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      dones: this.dones_prop,
    };
  },
};
</script>

<style></style>
