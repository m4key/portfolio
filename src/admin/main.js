import Vue from 'vue';
<<<<<<< HEAD
=======
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
>>>>>>> week_3
import App from './App.vue'

new Vue({
  el: "#app-root",
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> week_3
  render: h => h(App)
});