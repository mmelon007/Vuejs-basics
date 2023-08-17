<template>
  <div id="done-list">
    <label>已办列表</label>
    <ul>
      <li v-for="done in dones" :key="done.id">
        {{ done.description }}
        <label v-if="done.star">star</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["dones"],
  data() {
    return {};
  },
};
</script>

<style></style>
