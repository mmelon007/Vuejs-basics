<template>
  <div id="add-blog">
    <h2>add blog post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input v-model.lazy="blog.title" type="text" required />
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <p>Blog Categories</p>
        <label>Issac</label>
        <input type="checkbox" value="Issac" v-model="blog.categories" />
        <label>Lost</label>
        <input type="checkbox" value="Lost" v-model="blog.categories" />
        <label>Lazarus</label>
        <input type="checkbox" value="Lazarus" v-model="blog.categories" />
        <label>Az</label>
        <input type="checkbox" value="Az" v-model="blog.categories" />
      </div>
      <select v-model="blog.author">
        <option v-for="(author, index) in authors" :key="index">
          {{ author }}
        </option>
      </select>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>

    <div v-if="submitted">
      <h3>Thanks!</h3>
    </div>

    <hr />

    <div id="preview">
      <h3>preview blog</h3>
      <p>blog title: {{ blog.title }}</p>
      <p>blog content:</p>
      <p>{{ blog.content }}</p>
      <p>blog categories</p>
      <ul>
        <li v-for="(category, index) in blog.categories" :key="index">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
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
        content: "",
        categories: [],
        author: "",
      },
      authors: ["Ap Roll", "Melon", "Savior"],
      submitted: false,
    };
  },
  components: {},
  methods: {
    post: function () {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1,
        })
        .then(function (data) {
          console.log(data);
          this.submitted = true;
        });
    },
  },
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

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}
</style>
