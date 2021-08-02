import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import SortedTablePlugin from "vue-sorted-table";

Vue.use(VueRouter);
Vue.use(SortedTablePlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
