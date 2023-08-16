<template>
  <div>
    <add-blog> </add-blog>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    "add-blog": addBlog,
  },
  methods: {},
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
