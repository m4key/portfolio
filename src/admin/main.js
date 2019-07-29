import Vue from 'vue';
<<<<<<< HEAD
import App from './App.vue';
import router from './router';
import store from './store';
import requests from './requests';

store.$axios = requests;

new Vue({
  el: "#app-root",
  router,
  store,
=======
import App from './App.vue'

new Vue({
  el: "#app-root",
>>>>>>> master
  render: h => h(App)
});