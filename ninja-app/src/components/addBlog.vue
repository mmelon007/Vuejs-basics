<template>
  <div id="add-blog">
    <h2>add blog post</h2>
    <form>
      <label>Blog Title:</label>
      <input v-model.lazy="blog.title" type="text" required />
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content" ></textarea>
    </form>
    <div id="preview">
      <h3>preview blog</h3>
      <p>blog title: {{ blog.title }}</p>
      <p>blog content:</p>
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "addBlog",
  data() {
    return {
      blog: {
        title: "",
        content: ""
      }
    };
  },
  components: {},
  methods: {},
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>
