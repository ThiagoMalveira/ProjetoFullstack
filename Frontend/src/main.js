import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import infiniteScroll from 'vue-infinite-scroll';
import './plugins/vuetify';
import vuetify from 'vuetify'

Vue.use(VueRouter);
Vue.use(infiniteScroll);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
