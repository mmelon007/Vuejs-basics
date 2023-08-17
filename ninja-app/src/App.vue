<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from "./components/appHeader.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    "app-header": appHeader,
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
