import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import axios from 'axios';
import SortedTablePlugin from "vue-sorted-table";

Vue.prototype.$http = axios;

Vue.use(VueRouter);
Vue.use(SortedTablePlugin);
Vue.use(axios);

new Vue({
  render: h => h(App)
}).$mount('#app')
