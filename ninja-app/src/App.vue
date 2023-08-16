<template>
  <div>
    <add-blog> </add-blog>

    <show-blogs></show-blogs>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs
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
