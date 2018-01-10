// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Sortable from 'vue-sortable'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Sortable)

/* eslint-disable no-new */
new Vue({
  el: '#test',
  router,
  template: '<App/>',
  components: { App },
})
