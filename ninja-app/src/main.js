import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes";

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
});

// customer directives
Vue.directive("rainbow", {
  bind(el) {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  },
});

Vue.directive("theme", {
  bind(el, binding) {
    if (binding.value == "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "560px";
    }

    if (binding.arg == "colunm") {
      el.style.backgroundColor = "#ddd";
      el.style.padding = "20px";
    }
  },
});

// filters
Vue.filter("to-uppercase", function (value) {
  return value.toUpperCase();
});
Vue.filter("snippet", function (value) {
  return value.slice(0, 100) + "...";
});

// render the main vue
new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
