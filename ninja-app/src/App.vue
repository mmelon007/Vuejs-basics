<template>
  <div>
    <add-blog> </add-blog>

    <show-blogs></show-blogs>

    <blog-list></blog-list>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";
import blogList from "./components/blogList.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs,
    "blog-list": blogList,
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
