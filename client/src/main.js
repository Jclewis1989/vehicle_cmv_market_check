import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from '@/plugins/vuetify' // path to vuetify export
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Vue.use(VueRouter);
import { routes } from './routes';
import { store } from './store/store';

import DataTable from 'v-data-table'
Vue.use(DataTable)

const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  mode: 'history',
  vuetify,
  router, // ES6 Syntax
  store,
  render: h => h(App)
})