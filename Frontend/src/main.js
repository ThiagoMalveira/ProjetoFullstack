import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import './plugins/vuetify';
import vuetify from 'vuetify'

Vue.use(VueRouter);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
