<template>
  <div>
    <KeepAlive>
      <component v-bind:is="component"></component>
    </KeepAlive>
      <button v-on:click="component = 'form-one'">show one</button>
      <button v-on:click="component = 'form-two'">show two</button>
    
  </div>
</template>

<script>
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';


export default {
  name: 'App',
  data() {
    return {
      component: 'form-one'
    }
  },
  components: {
    'form-one': formOne,
    'form-two': formTwo
  },
  methods: {

  }

}

</script>

<style>

body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}

</style>
