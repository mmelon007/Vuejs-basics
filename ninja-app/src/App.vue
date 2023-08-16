<template>
  <div>
    <app-header v-bind:title_prop="title"></app-header>
    <ninja-content v-bind:ninjas_prop="ninjas"></ninja-content>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of a form</h3>
        <p>This is some info about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
    <app-footer v-bind:title_prop="title"></app-footer>
  </div>
</template>

<script>
import Ninja from './components/Ninja.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import formHelper from './components/formHelper.vue'


export default {
  name: 'App',
  data() {
    return {
      ninjas: [
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ],
      title: 'MMMMelon',
      slot_title: 'dynamic slot title'
    }
  },
  components: {
    'app-header' : Header,
    'ninja-content' : Ninja,
    'app-footer': Footer,
    'form-helper': formHelper
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }

}

</script>

<style>

body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}

</style>
